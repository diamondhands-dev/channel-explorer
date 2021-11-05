import { btcOrSats } from './../index';
it('show amount by selected unit', () => {
  expect(btcOrSats({ unit: 'sats', sats: 1000 })).toStrictEqual(1000);
  expect(btcOrSats({ unit: 'BTC', sats: 1000 })).toStrictEqual(0.00001);
});
