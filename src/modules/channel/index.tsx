import axios from 'axios';

import { BACKEND_ENDPOINT, PATH } from '../env';
import { logger } from '../logger';

export type TUnit = 'BTC' | 'sats';

export interface IChannel {
  alias: string;
  capacity: number;
  channelId: string;
  node1BaseFee: number;
  node1FeeRate: number;
  node2BaseFee: number;
  node2FeeRate: number;
  node2PubKey: string;
}

export const getInvoice = async ({ channelId }: { channelId: string }): Promise<string> => {
  try {
    const url = `${BACKEND_ENDPOINT}${PATH.INVOICE}/${channelId}`;
    const { data } = await axios.get<{ bolt11: string }>(url);
    return data.bolt11;
  } catch (error) {
    logger.error(error);
    return 'Something goes wrong...';
  }
};
