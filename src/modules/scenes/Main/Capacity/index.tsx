import { Tooltip } from 'comet-ui-kit';
import Image from 'next/image';
import React, { useState } from 'react';
import Collapse from 'react-css-collapse';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import pointingOrange from '../../../../../public/icons/pointing-orange.svg';
import pointingPurple from '../../../../../public/icons/pointing-purple.svg';
import { getInvoice, TUnit } from '../../../channel';
import { btcOrSats } from '../../../helper';
import { MobileToM, SizeM } from '../../Common';
import { Payment } from '../Payment';

import {
  Bar,
  BarBond,
  ButtonView,
  CapacityContainer,
  CapacityValue,
  ColumnCapacityValue,
  ColumnFeeLocal,
  ColumnFeeRemote,
  FeeLocal,
  FeeRemote,
  Guide,
  MaxGuide,
  MaxReceive,
  MaxSend,
  RowButton,
  RowCapacity,
  RowPayment,
  RowToolTip,
  TextCapacity,
  TextCapacityValue,
  TextLocal,
  TextRemote,
  TextValueAmount,
  TooltipAmount,
  ToolTipRemote,
  Triangle,
  TtlCapacity,
} from './styled';

export const Capacity = ({
  unit,
  nodeOwner,
  channelName,
  capacity,
  remoteBaseFee,
  localBaseFee,
  remoteFeeRate,
  localFeeRate,
  channelId,
}: {
  unit: TUnit;
  nodeOwner: string;
  channelId: string;
  channelName: string;
  capacity: number;
  remoteBaseFee: number;
  localBaseFee: number;
  remoteFeeRate: number;
  localFeeRate: number;
}) => {
  // Todo
  const [isPaid, setIsPaid] = useState<Boolean>(false);

  const [isViewPayment, setIsViewPayment] = useState<Boolean>(false);
  const [invoice, setInvoice] = useState<string>('');
  const ttlCapacity = btcOrSats({ sats: capacity, unit });
  const value = '---------';
  const valueRemote = value;
  const valueLocal = value;

  const price = btcOrSats({ sats: 1000, unit });

  const textRemoteBaseFee = btcOrSats({ sats: remoteBaseFee, unit });
  const textLocalBaseFee = btcOrSats({ sats: localBaseFee, unit });

  const columnTtlCapacity = (
    <TtlCapacity>
      <TextCapacity>
        <FormattedMessage id="total-capacity" />
      </TextCapacity>
      <ColumnCapacityValue>
        <TextCapacityValue>
          <FormattedNumber value={ttlCapacity} maximumSignificantDigits={8} />
        </TextCapacityValue>
        <TextCapacity>{unit}</TextCapacity>
      </ColumnCapacityValue>
    </TtlCapacity>
  );

  const viewButton = !isViewPayment && (
    <ButtonView
      onMouseEnter={() => {
        (async () => {
          const result = await getInvoice({ channelId });
          setInvoice(result);
        })();
      }}
      onClick={() => setIsViewPayment(true)}
    >
      <FormattedMessage id="view-button" />
    </ButtonView>
  );

  const rowInfo = (
    <RowCapacity>
      <ColumnFeeRemote>
        <TextRemote>{channelName}</TextRemote>
        <Tooltip
          content={
            <Tooltip.Content>
              <ToolTipRemote>
                <RowToolTip>
                  <div>
                    <FormattedMessage id="base-fee" />
                  </div>
                  <TooltipAmount>
                    <FormattedNumber value={textRemoteBaseFee} maximumSignificantDigits={8} />
                  </TooltipAmount>
                  <div>{unit}</div>
                </RowToolTip>
                <RowToolTip>
                  <div>
                    <FormattedMessage id="fee-rate" />
                  </div>
                  <TooltipAmount>{remoteFeeRate}</TooltipAmount>
                  <div>%</div>
                </RowToolTip>
              </ToolTipRemote>
            </Tooltip.Content>
          }
          targetHtmlTag="div"
        >
          <FeeRemote>
            <FormattedMessage id="fee" />
          </FeeRemote>
        </Tooltip>
      </ColumnFeeRemote>
      <SizeM>{columnTtlCapacity}</SizeM>
      <ColumnFeeLocal>
        <Tooltip
          content={
            <Tooltip.Content>
              <ToolTipRemote>
                <RowToolTip>
                  <div>
                    <FormattedMessage id="base-fee" />
                  </div>
                  <TooltipAmount>
                    <FormattedNumber value={textLocalBaseFee} maximumSignificantDigits={8} />
                  </TooltipAmount>
                  <div>{unit}</div>
                </RowToolTip>
                <RowToolTip>
                  <div>
                    <FormattedMessage id="fee-rate" />
                  </div>
                  <TooltipAmount>{localFeeRate}</TooltipAmount>
                  <div>%</div>
                </RowToolTip>
              </ToolTipRemote>
            </Tooltip.Content>
          }
          targetHtmlTag="div"
        >
          <FeeLocal>
            <FormattedMessage id="fee" />
          </FeeLocal>
        </Tooltip>
        <TextLocal>{nodeOwner}</TextLocal>
      </ColumnFeeLocal>
    </RowCapacity>
  );

  const bar = (
    <Bar isPaid={isPaid}>
      <BarBond widthPercentage={Number(isPaid ? 0.5 : 0) * 100} />
    </Bar>
  );

  const rowCapacityValue = (
    <Guide>
      <MaxReceive>
        <MaxGuide>
          <Triangle>
            <Image src={pointingOrange} alt="pointing-receive" />
          </Triangle>
          <FormattedMessage id="max-receive" />
        </MaxGuide>
        <CapacityValue>
          <TextValueAmount>{valueRemote}</TextValueAmount>
          <div>{unit}</div>
        </CapacityValue>
      </MaxReceive>
      <SizeM>{viewButton}</SizeM>
      <MaxSend>
        <MaxGuide>
          <FormattedMessage id="max-send" />
          <Triangle>
            <Image src={pointingPurple} alt="pointing-send" />
          </Triangle>
        </MaxGuide>
        <CapacityValue>
          <TextValueAmount>{valueLocal}</TextValueAmount>
          <div>{unit}</div>
        </CapacityValue>
      </MaxSend>
    </Guide>
  );

  return (
    <CapacityContainer>
      <MobileToM>{columnTtlCapacity}</MobileToM>
      {rowInfo}
      {bar}
      {rowCapacityValue}
      <MobileToM>
        <RowButton>{viewButton}</RowButton>
      </MobileToM>
      <Collapse isOpen={isViewPayment && invoice !== ''}>
        <RowPayment>
          <Payment unit={unit} price={price} invoice={invoice} />
        </RowPayment>
      </Collapse>
    </CapacityContainer>
  );
};
