import { Icon } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants, theme } from '../../../styles';

const { media } = StylingConstants;

export const PaymentContainer = styled.div`
  padding: ${rem(16)} ${rem(10)};
  width: 100%;
  max-width: ${rem(844)};
  background: ${theme.colors.paymentBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${rem(media.md)}) {
    padding: ${rem(28)} ${rem(32)};
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Price = styled.div`
  margin-bottom: ${rem(12)};
  @media (min-width: ${rem(media.md)}) {
    margin-bottom: ${rem(0)};
  }
`;

export const QR = styled.div``;

export const RowPay = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${rem(8)};
  margin-bottom: ${rem(8)};
  justify-content: center;
  @media (min-width: ${rem(media.md)}) {
    justify-content: flex-start;
  }
`;

export const RowInvoice = styled(RowPay)``;

export const Pay = styled.div`
  font-weight: 500;
  font-size: ${rem(14)};
  @media (min-width: ${rem(media.sm)}) {
    font-size: ${rem(16)};
  }
`;

export const TextInvoice = styled(Pay)`
  font-size: ${rem(14)};
  white-space: nowrap;
`;

export const Amount = styled.div`
  font-family: 'Rajdhani';
  font-weight: 600;
  margin-bottom: ${rem(4)};
  font-size: ${rem(28)};
  @media (min-width: ${rem(media.sm)}) {
    font-size: ${rem(34)};
  }
`;

export const AmountUnit = styled(Pay)`
  font-size: ${rem(16)};
  @media (min-width: ${rem(media.sm)}) {
    font-size: ${rem(20)};
  }
`;

export const IconCopy = styled(Icon.Paste)`
  font-size: ${rem(18)};
  color: #9b9b9b;
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
  cursor: pointer;
`;

export const ValueInvoice = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: ${rem(100)};
  font-size: ${rem(14)};
  @media (min-width: ${rem(media.xs)}) {
    max-width: ${rem(150)};
  }
  @media (min-width: ${rem(media.sm)}) {
    font-size: ${rem(16)};
    max-width: ${rem(200)};
  }
  @media (min-width: ${rem(media.md)}) {
    max-width: ${rem(250)};
  }
  @media (min-width: ${rem(media.lg)}) {
    max-width: ${rem(420)};
  }
`;
