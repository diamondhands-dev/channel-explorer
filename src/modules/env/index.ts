export const isDev = process.env.NODE_ENV !== 'production';

export const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL || (isDev ? 'trace' : 'debug');

export const BACKEND_ENDPOINT = process.env.NEXT_PUBLIC_BACKEND_ENDPOINT;

export enum PATH {
  SELF = '/self',
  CHANNELS = '/channels',
  SEARCH = '/search',
  INVOICE = '/invoice',
  CHECK_INVOICE = '/checkInvoice',
}

export enum LOCAL_STORAGE {
  Unit = 'unit',
}

export const appTitle = 'Diamond Scanner';
