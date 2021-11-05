import { satoshisToBitcoin } from 'bitcoin-conversion';

import { TUnit } from './../../channel';

export const btcOrSats = ({ unit, sats }: { unit: TUnit; sats: number }) => {
  if (unit === 'BTC') {
    return satoshisToBitcoin(sats);
  }
  return sats;
};
