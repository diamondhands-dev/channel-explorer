import { emphasizeAmount } from './../index';
it('separate the amount', () => {
  const result = emphasizeAmount('15.83473291');
  expect(result.emphasized).toStrictEqual('15.8347');
  expect(result.rest).toStrictEqual('3291');
});
