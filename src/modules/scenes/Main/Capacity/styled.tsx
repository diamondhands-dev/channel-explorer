import { rem, transitions } from 'polished';
import styled from 'styled-components';

import { StylingConstants, theme } from '../../../styles';

const { media } = StylingConstants;

export const CapacityContainer = styled.div`
  padding: ${rem(12)} ${rem(12)};
  width: 100%;
  border: ${theme.styles.borderDarkGray};
  box-sizing: border-box;
  box-shadow: ${theme.styles.boxShadow};
  @media (min-width: ${rem(media.lg)}) {
    padding: ${rem(32)};
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RowCapacity = styled(Row)`
  margin-top: ${rem(12)};
  margin-bottom: ${rem(12)};
  @media (min-width: ${rem(media.lg)}) {
    margin-top: ${rem(0)};
  }
`;

export const ColumnFeeRemote = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${rem(media.lg)}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    column-gap: ${rem(14)};
  }
`;

export const ColumnFeeLocal = styled(ColumnFeeRemote)`
  flex-direction: column-reverse;
  align-items: flex-end;
  @media (min-width: ${rem(media.lg)}) {
    flex-direction: row;
    align-items: center;
  }
`;

export const TextRemote = styled.span`
  font-size: ${rem(14)};
  margin-bottom: ${rem(2)};
  font-weight: 600;
  color: ${theme.colors.orange};
  @media (min-width: ${rem(media.sm)}) {
    font-size: ${rem(16)};
    margin-bottom: ${rem(0)};
  }
`;

export const TextLocal = styled(TextRemote)`
  color: ${theme.colors.purple};
`;

export const FeeRemote = styled.div`
  width: ${rem(40)};
  text-align: center;
  background: ${theme.colors.orange};
  color: ${theme.colors.white};
  text-decoration: underline;
  padding: ${rem(2)} ${rem(8)};
  font-family: 'Rajdhani';
  font-weight: 600;
  font-size: ${rem(14)};
  cursor: pointer;
  margin-top: ${rem(2)};
  @media (min-width: ${rem(media.lg)}) {
    margin-top: ${rem(0)};
    width: 100%;
  }
`;

export const FeeLocal = styled(FeeRemote)`
  background: ${theme.colors.purple};
`;

export const TtlCapacity = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${rem(4)};
  flex-flow: column;
  font-size: ${rem(14)};
  @media (min-width: ${rem(media.lg)}) {
    font-size: ${rem(16)};
    flex-flow: row;
  }
`;

export const ColumnCapacityValue = styled(TtlCapacity)`
  flex-flow: row;
`;

export const TextCapacityValue = styled.span`
  font-family: 'Rajdhani';
  font-weight: 600;
  font-size: ${rem(20)};
  padding-bottom: ${rem(2)};
  @media (min-width: ${rem(media.lg)}) {
    font-size: ${rem(24)};
  }
`;

export const TextCapacity = styled.span`
  font-weight: 500;
  margin-bottom: ${rem(2)};
  @media (min-width: ${rem(media.lg)}) {
    margin-bottom: ${rem(0)};
  }
`;

export const BarBond = styled.div<{ widthPercentage: number }>`
  height: ${rem(20)};
  width: calc(${({ widthPercentage }) => widthPercentage}% + 1px);
  background: ${({ widthPercentage }) => widthPercentage !== 0 && theme.colors.orange};
  border-top-left-radius: ${rem(32)};
  border-bottom-left-radius: ${rem(32)};
  ${({ theme }) => transitions(['width'], theme.comet.duration.normal)};
`;

export const Bar = styled.div<{ isPaid: Boolean }>`
  height: 100%;
  position: relative;
  margin-bottom: ${rem(4)};
  background: ${({ isPaid }) => (isPaid ? theme.colors.purple : theme.colors.placeholderBar)};
  border-radius: ${rem(32)};
  display: flex;
  align-items: center;
  box-shadow: ${theme.styles.boxShadowBar};
`;

export const Guide = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: ${rem(24)};
`;

export const RowButton = styled.div`
  margin-bottom: ${rem(6)};
  @media (min-width: ${rem(media.xs)}) {
    display: flex;
    justify-content: center;
  }
`;

export const ButtonView = styled.div`
  font-size: ${rem(18)};
  background: ${theme.colors.buttonCapacityBg};
  box-shadow: ${theme.styles.boxShadowButtonCapacity};
  border-radius: ${rem(8)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${rem(8)} ${rem(12)};
  color: ${theme.colors.white};
  font-weight: bold;
  cursor: pointer;
  :hover {
    background: ${theme.colors.buttonCapacityBgHover};
    box-shadow: ${theme.styles.boxShadowButtonCapacityHover};
  }
`;

export const MaxReceive = styled.div`
  color: ${theme.colors.orange};
`;

export const MaxSend = styled.div`
  color: ${theme.colors.purple};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const MaxGuide = styled.div`
  font-size: ${rem(12)};
  font-weight: 500;
  display: flex;
  align-items: flex-end;
  column-gap: ${rem(4)};
  margin-bottom: ${rem(14)};
`;

export const Triangle = styled.div``;

export const CapacityValue = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${rem(4)};
  font-size: ${rem(16)};
`;

export const TextValueAmount = styled.div`
  font-weight: 600;
  @media (min-width: ${rem(media.sm)}) {
    font-size: ${rem(20)};
  }
  @media (min-width: ${rem(media.lg)}) {
    font-size: ${rem(24)};
  }
`;

export const RowPayment = styled.div`
  display: flex;
  justify-content: center;
`;

export const ToolTipBase = styled.div`
  border-radius: ${rem(4)};
  padding: ${rem(4)} ${rem(8)};
`;

export const ToolTipRemote = styled(ToolTipBase)`
  /* background: #fff7e3; */
  /* box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25); */
`;

export const RowToolTip = styled.div`
  display: flex;
  column-gap: ${rem(6)};
  font-weight: 500;
  font-size: ${rem(14)};
  align-items: center;
`;

export const TooltipAmount = styled.div`
  font-family: 'Rajdhani';
  font-weight: 600;
  font-size: ${rem(18)};
`;
