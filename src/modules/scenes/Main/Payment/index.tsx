import useCopy from '@react-hook/copy';
import React, { useEffect, useState } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { QRCode } from 'react-qrcode-logo';
import { toast } from 'react-toastify';
import { ScaleLoader } from 'react-spinners';

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
  RowLoader,
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
  const [initialLoading, setInitialLoading] = useState<boolean>(true);

  useEffect(() => {
    if (invoice) {
      setTimeout(() => {
        setInitialLoading(false);
      }, 1000);
    } else {
      setInitialLoading(true);
    }
  }, [invoice]);

  return (
    <PaymentContainer>
      {invoice && !initialLoading ? (
        <>
          <Price className="animate__animated animate__fadeIn">
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
          <QR className="animate__animated animate__fadeIn">
            <QRCode
              size={170}
              value={invoice}
              bgColor="white"
              eyeRadius={2}
              fgColor={theme.colors.orange}
              qrStyle="dots"
            />
          </QR>
        </>
      ) : (
        <RowLoader>
          <ScaleLoader margin={3} color="#36D7B7" />
        </RowLoader>
      )}
    </PaymentContainer>
  );
};
