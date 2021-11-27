import { useContext } from 'react';

import { RequestInvoiceContext } from './context';
export { RequestInvoiceProvider } from './context';

export const useRequestInvoice = () => useContext(RequestInvoiceContext);
