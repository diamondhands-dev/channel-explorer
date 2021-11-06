import { Tooltip } from 'comet-ui-kit';
import Image from 'next/image';
import React, { useState } from 'react';
import Collapse from 'react-css-collapse';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import pointingOrange from '../../../../../public/icons/pointing-orange.svg';
import pointingPurple from '../../../../../public/icons/pointing-purple.svg';
import { TUnit } from '../../../channel';
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
}: {
  unit: TUnit;
  nodeOwner: string;
  channelName: string;
}) => {
  const [isPaid, setIsPaid] = useState<Boolean>(false);
  const [isViewPayment, setIsViewPayment] = useState<Boolean>(false);

  const ttlCapacity = btcOrSats({ sats: 10000000000, unit });
  const value = '---------';
  const valueRemote = value;
  const valueLocal = value;

  const price = btcOrSats({ sats: 1000, unit });
  const invoice = 'lnbc1500n1psh6pzhpp5xq3qsat4yfqc6vak0xjsmpgjsmpg44esqhffrz8';

  const remoteBaseFee = btcOrSats({ sats: 1000, unit });
  const localBaseFee = btcOrSats({ sats: 1000, unit });
  const remoteFeeRate = 23;
  const localFeeRate = 77;

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
    <ButtonView onClick={() => setIsViewPayment(true)}>
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
                    <FormattedNumber value={remoteBaseFee} maximumSignificantDigits={8} />
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
                    <FormattedNumber value={localBaseFee} maximumSignificantDigits={8} />
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
      <Collapse isOpen={isViewPayment}>
        <RowPayment>
          <Payment unit={unit} price={price} invoice={invoice} />
        </RowPayment>
      </Collapse>
    </CapacityContainer>
  );
};
