import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

import { getInvoice } from '../../channel';

export type RequestInvoiceContextValue = {
  monitorChannelId: string | null;
  invoice: string;
  payPrice: number;
  checkPaymentUrl: string;
  updateInvoice: (id: string) => void;
  setMonitorChannelId: (id: string) => void;
};

export const RequestInvoiceContext = createContext<RequestInvoiceContextValue>({
  monitorChannelId: null,
  updateInvoice: (id: string) => {},
  setMonitorChannelId: (id: string) => {},
  invoice: '',
  payPrice: 1000,
  checkPaymentUrl: '',
});

export const RequestInvoiceProvider = ({
  value: valueProp,
  children,
}: {
  children?: ReactNode;
  value: Pick<RequestInvoiceContextValue, 'monitorChannelId'>;
}) => {
  const [monitorChannelId, setMonitorChannelId] = useState<string | null>(
    valueProp.monitorChannelId,
  );
  const [invoice, setInvoice] = useState<string>('');
  const [checkPaymentUrl, setCheckPaymentUrl] = useState<string>('');
  const [payPrice, setPayPrice] = useState<number>(1000);

  const updateInvoice = useCallback(async (id: string) => {
    if (!id) return;
    setMonitorChannelId(id);
    const { invoice, paymentMonitorUrl, price } = await getInvoice({ channelId: id });
    setPayPrice(price);
    setInvoice(invoice);
    setCheckPaymentUrl(paymentMonitorUrl);
  }, []);

  useEffect(() => {
    if (monitorChannelId) {
      setPayPrice(0);
      setInvoice('');
      setCheckPaymentUrl(null);
    }
  }, [monitorChannelId]);

  const value = useMemo(
    () => ({
      monitorChannelId,
      invoice,
      payPrice,
      checkPaymentUrl,
      updateInvoice,
      setMonitorChannelId,
    }),
    [monitorChannelId, invoice, payPrice, updateInvoice, checkPaymentUrl, setMonitorChannelId],
  );

  return <RequestInvoiceContext.Provider value={value}>{children}</RequestInvoiceContext.Provider>;
};
