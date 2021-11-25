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

export interface ICapacityDetail {
  capacity: number;
  lndResponse: number;
  localBalance: number;
  remoteBalance: number;
  paymentStatus: number;
}

export const getInvoice = async ({
  channelId,
}: {
  channelId: string;
}): Promise<{ invoice: string; paymentMonitorUrl: string; price: number }> => {
  try {
    const url = `${BACKEND_ENDPOINT}${PATH.INVOICE}/${channelId}`;
    const { data } = await axios.get<{ bolt11: string; paymentHash: string; amount: number }>(url);
    const paymentMonitorUrl = `${BACKEND_ENDPOINT}${PATH.CHECK_INVOICE}/${channelId}/${data.paymentHash}`;

    console.log('channelId', channelId);
    console.log('paymentHash', data.paymentHash);
    console.log('paymentMonitorUrl', paymentMonitorUrl);

    return { invoice: data.bolt11, paymentMonitorUrl, price: data.amount };
  } catch (error) {
    logger.error(error);
    return {
      invoice: 'Something goes wrong...',
      paymentMonitorUrl: 'Something goes wrong...',
      price: 0,
    };
  }
};
