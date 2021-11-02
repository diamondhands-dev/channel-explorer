import React, { useState } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import Image from 'next/image';
import { QRCode } from 'react-qrcode-logo';
import useCopy from '@react-hook/copy';
import { toast } from 'react-toastify';
import Collapse from 'react-css-collapse';
import { Tooltip } from 'comet-ui-kit';

import pointingOrange from '../../../../../public/icons/pointing-orange.svg';
import pointingPurple from '../../../../../public/icons/pointing-purple.svg';
import { TUnit } from '../../../channel';
import { theme } from '../../../styles';

import {
  Bar,
  BarBond,
  CapacityContainer,
  ColumnFee,
  FeeLocal,
  FeeRemote,
  Guide,
  MaxReceive,
  MaxSend,
  RowCapacity,
  TextCapacity,
  TextCapacityValue,
  TextLocal,
  TextRemote,
  TtlCapacity,
  ButtonView,
  MaxGuide,
  CapacityValue,
  TextValueAmount,
  PaymentContainer,
  IconCopy,
  QR,
  Amount,
  AmountUnit,
  Pay,
  Price,
  RowPay,
  RowInvoice,
  TextInvoice,
  ColumnInvoice,
  ValueInvoice,
  RowPayment,
  RowToolTip,
  TooltipAmount,
  ToolTipRemote,
} from './styled';

export const Capacity = ({ unit }: { unit: TUnit }) => {
  const [isPaid, setIsPaid] = useState<Boolean>(false);
  const [isViewPayment, setIsViewPayment] = useState<Boolean>(false);

  const ttlCapacity = 10000000000;
  const value = '---------';
  const valueRemote = value;
  const valueLocal = value;

  const price = 1000;
  const invoice = 'lnbc1500n1psh6pzhpp5xq3qsat4yfqc6vak0xjsmpgjsmpg44esqhffrz8';

  const { copy } = useCopy(invoice);
  const copyPk = () => {
    copy();
    toast.success(<FormattedMessage id="toast.copied.invoice" />);
  };

  const remoteBaseFee = '1000';
  const localBaseFee = '1000';
  const remoteFeeRate = 23;
  const localFeeRate = 77;

  const rowInfo = (
    <RowCapacity>
      <ColumnFee>
        <TextRemote>
          <FormattedMessage id="remote" />
        </TextRemote>
        <Tooltip
          content={
            <Tooltip.Content>
              <ToolTipRemote>
                <RowToolTip>
                  <div>
                    <FormattedMessage id="base-fee" />
                  </div>
                  <TooltipAmount>{remoteBaseFee}</TooltipAmount>
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
          <FormattedNumber value={ttlCapacity} />
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
                  <TooltipAmount>{localBaseFee}</TooltipAmount>
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
        <TextLocal>
          <FormattedMessage id="local" />
        </TextLocal>
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

  const payment = (
    <PaymentContainer>
      <Price>
        <RowPay>
          <Pay>
            <FormattedMessage id="amount-to-pay" />
          </Pay>
          <Amount>
            <FormattedNumber value={price} />
          </Amount>
          <AmountUnit>{unit}</AmountUnit>
        </RowPay>
        <RowInvoice>
          <TextInvoice>
            <FormattedMessage id="invoice" />
          </TextInvoice>
          <ColumnInvoice>
            <ValueInvoice>{invoice}</ValueInvoice>
            <IconCopy onClick={copyPk} />
          </ColumnInvoice>
        </RowInvoice>
      </Price>
      <QR>
        <QRCode
          size={170}
          value={invoice}
          bgColor="white"
          eyeRadius={2}
          fgColor={theme.colors.orange}
          qrStyle="dots"
          logoImage={'icons/dh-logo.svg'}
        />
      </QR>
    </PaymentContainer>
  );

  return (
    <CapacityContainer>
      {rowInfo}
      {bar}
      {rowCapacityValue}
      <Collapse isOpen={isViewPayment}>
        <RowPayment>{payment}</RowPayment>
      </Collapse>
    </CapacityContainer>
  );
};
