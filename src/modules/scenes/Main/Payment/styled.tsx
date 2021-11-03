import { Icon } from 'comet-ui-kit';
import { rem, transitions } from 'polished';
import styled from 'styled-components';

import { theme } from '../../../styles';

// import { StylingConstants } from '../../../styles';
// const { media } = StylingConstants;

export const PaymentContainer = styled.div`
  padding: ${rem(28)} ${rem(32)};
  width: 100%;
  max-width: ${rem(844)};
  background: ${theme.colors.paymentBg};
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.div``;

export const QR = styled.div``;

export const RowPay = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${rem(8)};
  margin-bottom: ${rem(8)};
`;

export const RowInvoice = styled(RowPay)``;

export const Pay = styled.div`
  font-weight: 500;
`;

export const TextInvoice = styled(Pay)`
  font-size: ${rem(14)};
`;

export const Amount = styled.div`
  font-family: 'Rajdhani';
  font-weight: 600;
  font-size: ${rem(34)};
  margin-bottom: ${rem(4)};
`;

export const AmountUnit = styled(Pay)`
  font-size: ${rem(20)};
`;

export const IconCopy = styled(Icon.Paste)`
  font-size: ${rem(18)};
  color: #9b9b9b;
  cursor: pointer;
  margin-top: ${rem(2)};
`;

export const ColumnInvoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${rem(438)};
  column-gap: ${rem(8)};
  background: #ffffff;
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: ${rem(4)};
  padding: ${rem(2)} ${rem(12)};
`;

export const ValueInvoice = styled.div`
  width: 100%;
  max-width: ${rem(420)};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
