import axios from 'axios';
import { Tooltip } from 'comet-ui-kit';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Collapse from 'react-css-collapse';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import pointingOrange from '../../../../../public/icons/pointing-orange.svg';
import pointingPurple from '../../../../../public/icons/pointing-purple.svg';
import { ICapacityDetail, TUnit } from '../../../channel';
import { btcOrSats } from '../../../helper';
import { useInterval, useRequestInvoice } from '../../../hooks';
import { logger } from '../../../logger';
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
  TextCapacityPercentage,
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
  const {
    monitorChannelId,
    invoice,
    payPrice,
    updateInvoice,
    checkPaymentUrl,
    setMonitorChannelId,
  } = useRequestInvoice();
  const isFocusedChannelId = monitorChannelId === channelId;

  // Memo: The amount of localBalance + remoteBalance is slightly different compare with `ttlCapacity` due to bolt11
  const [calculatedTtlCapacity, setCalculatedTtlCapacity] = useState<number>(0);

  const [isPaid, setIsPaid] = useState<Boolean>(false);
  const [capacityDetails, setCapacityDetails] = useState<ICapacityDetail | null>(null);
  const [monitorCount, setMonitorCount] = useState<number>(0);

  const ttlCapacity = btcOrSats({ sats: capacity, unit });
  const value = '---------';

  const valueRemote = isPaid ? (
    <FormattedNumber
      value={btcOrSats({ sats: capacityDetails.remoteBalance, unit })}
      maximumSignificantDigits={8}
    />
  ) : (
    value
  );

  const valueLocal = isPaid ? (
    <FormattedNumber
      value={btcOrSats({ sats: capacityDetails.localBalance, unit })}
      maximumSignificantDigits={8}
    />
  ) : (
    value
  );

  const price = btcOrSats({ sats: payPrice, unit });

  const remotePercentage =
    Number(isPaid ? capacityDetails.remoteBalance / calculatedTtlCapacity : 0) * 100;
  const localPercentage =
    Number(isPaid ? capacityDetails.localBalance / calculatedTtlCapacity : 0) * 100;

  const intervalSecs = 4000;

  useInterval(() => {
    if (!isFocusedChannelId || !checkPaymentUrl || capacityDetails) {
      return;
    }
    (async () => {
      try {
        const { data } = await axios.get<ICapacityDetail>(checkPaymentUrl);
        if (data.capacity > 0) {
          setCapacityDetails(data);
          setCalculatedTtlCapacity(data.localBalance + data.remoteBalance);
          setIsPaid(true);
          setMonitorCount(0);
        } else {
          setMonitorCount(monitorCount + 1);
        }
      } catch (error) {
        logger.error(error);
      }
    })();
  }, intervalSecs);

  useEffect(() => {
    if (isFocusedChannelId) {
      const mins = 5;
      const round = intervalSecs / 1000;
      const timeoutRound = (mins * 60) / round;
      if (monitorCount >= timeoutRound && !capacityDetails) {
        setMonitorChannelId('');
      }
    }
  }, [monitorCount, capacityDetails, setMonitorChannelId, isFocusedChannelId]);

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

  const viewButton = !isFocusedChannelId && !capacityDetails && (
    <ButtonView
      onClick={() => {
        (async () => {
          updateInvoice(channelId);
        })();
      }}
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
                    <FormattedNumber value={remoteBaseFee} maximumSignificantDigits={8} />
                  </TooltipAmount>
                  <div>
                    <FormattedMessage id="msat" />
                  </div>
                </RowToolTip>
                <RowToolTip>
                  <div>
                    <FormattedMessage id="fee-rate" />
                  </div>
                  <TooltipAmount>{remoteFeeRate}</TooltipAmount>
                  <div>
                    <FormattedMessage id="ppm" />
                  </div>
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
                  <div>
                    <FormattedMessage id="msat" />
                  </div>
                </RowToolTip>
                <RowToolTip>
                  <div>
                    <FormattedMessage id="fee-rate" />
                  </div>
                  <TooltipAmount>{localFeeRate}</TooltipAmount>
                  <div>
                    <FormattedMessage id="ppm" />
                  </div>
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
      <BarBond widthPercentage={remotePercentage} />
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
          <TextCapacityPercentage>
            {isPaid && (
              <FormattedMessage
                id="capacity-percent"
                values={{
                  value: <FormattedNumber value={remotePercentage} maximumSignificantDigits={2} />,
                }}
              />
            )}
          </TextCapacityPercentage>
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
          <TextCapacityPercentage>
            {isPaid && (
              <FormattedMessage
                id="capacity-percent"
                values={{
                  value: <FormattedNumber value={localPercentage} maximumSignificantDigits={2} />,
                }}
              />
            )}
          </TextCapacityPercentage>
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
      <Collapse isOpen={!isPaid && monitorChannelId === channelId}>
        <RowPayment>
          <Payment unit={unit} price={price} invoice={invoice} />
        </RowPayment>
      </Collapse>
    </CapacityContainer>
  );
};
