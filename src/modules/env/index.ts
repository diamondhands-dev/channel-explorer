export const isDev = process.env.NODE_ENV !== 'production';

export const logLevel = process.env.NEXT_PUBLIC_LOG_LEVEL || (isDev ? 'trace' : 'debug');

export const GITHUB_REPO_URL = 'https://github.com/diamondhands-dev/channel-explorer';

export const BACKEND_ENDPOINT = 'http://ln.kankichi.xyz:8810';

export enum PATH {
  SELF = '/self',
  CHANNELS = '/channels',
  INVOICE = '/invoice',
  POOL = '/checkInvoice',
}
