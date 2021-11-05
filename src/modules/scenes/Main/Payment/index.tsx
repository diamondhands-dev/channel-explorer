import useCopy from '@react-hook/copy';
import React from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { QRCode } from 'react-qrcode-logo';
import { toast } from 'react-toastify';

import { TUnit } from '../../../channel';
import { theme } from '../../../styles';

import {
  Amount,
  AmountUnit,
  ColumnInvoice,
  IconCopy,
  Pay,
  PaymentContainer,
  Price,
  QR,
  RowInvoice,
  RowPay,
  TextInvoice,
  ValueInvoice,
} from './styled';

export const Payment = ({
  unit,
  price,
  invoice,
}: {
  unit: TUnit;
  price: number;
  invoice: string;
}) => {
  const { copy } = useCopy(invoice);
  const copyInvoice = () => {
    copy();
    toast.success(<FormattedMessage id="toast.copied.invoice" />);
  };

  return (
    <PaymentContainer>
      <Price>
        <RowPay>
          <Pay>
            <FormattedMessage id="amount-to-pay" />
          </Pay>
          <Amount>
            <FormattedNumber value={price} maximumSignificantDigits={8} />
          </Amount>
          <AmountUnit>{unit}</AmountUnit>
        </RowPay>
        <RowInvoice>
          <TextInvoice>
            <FormattedMessage id="invoice" />
          </TextInvoice>
          <ColumnInvoice onClick={copyInvoice}>
            <ValueInvoice>{invoice}</ValueInvoice>
            <IconCopy />
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
        />
      </QR>
    </PaymentContainer>
  );
};
