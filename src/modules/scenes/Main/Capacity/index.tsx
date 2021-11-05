import { Tooltip } from 'comet-ui-kit';
import Image from 'next/image';
import React, { useState } from 'react';
import Collapse from 'react-css-collapse';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import pointingOrange from '../../../../../public/icons/pointing-orange.svg';
import pointingPurple from '../../../../../public/icons/pointing-purple.svg';
import { TUnit } from '../../../channel';
import { btcOrSats } from '../../../helper';
import { Payment } from '../Payment';

import {
  Bar,
  BarBond,
  ButtonView,
  CapacityContainer,
  CapacityValue,
  ColumnFee,
  FeeLocal,
  FeeRemote,
  Guide,
  MaxGuide,
  MaxReceive,
  MaxSend,
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

  const rowInfo = (
    <RowCapacity>
      <ColumnFee>
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
      </ColumnFee>
      <TtlCapacity>
        <TextCapacity>
          <FormattedMessage id="total-capacity" />
        </TextCapacity>
        <TextCapacityValue>
          <FormattedNumber value={ttlCapacity} maximumSignificantDigits={8} />
        </TextCapacityValue>
        <TextCapacity>{unit}</TextCapacity>
      </TtlCapacity>
      <ColumnFee>
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
      </ColumnFee>
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
          <Image src={pointingOrange} alt="pointing-receive" />
          <FormattedMessage id="max-receive" />
        </MaxGuide>
        <CapacityValue>
          <TextValueAmount>{valueRemote}</TextValueAmount>
          <div>{unit}</div>
        </CapacityValue>
      </MaxReceive>
      {!isViewPayment && (
        <ButtonView onClick={() => setIsViewPayment(true)}>
          <FormattedMessage id="view-button" />
        </ButtonView>
      )}
      <MaxSend>
        <MaxGuide>
          <FormattedMessage id="max-send" />
          <Image src={pointingPurple} alt="pointing-send" />
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
      {rowInfo}
      {bar}
      {rowCapacityValue}
      <Collapse isOpen={isViewPayment}>
        <RowPayment>
          <Payment unit={unit} price={price} invoice={invoice} />
        </RowPayment>
      </Collapse>
    </CapacityContainer>
  );
};
