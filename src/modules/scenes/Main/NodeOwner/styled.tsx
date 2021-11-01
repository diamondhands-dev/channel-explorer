import { Icon } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants, theme } from '../../../styles';
const { media } = StylingConstants;

export const NodeOwnerContainer = styled.div`
  margin-bottom: ${rem(32)};
  width: 100%;
  max-width: ${rem(1360)};
  background: ${theme.colors.white};
  box-shadow: ${theme.styles.boxShadow};
  border-radius: ${rem(10)};
  padding-top: ${rem(10)};
  padding-bottom: ${rem(28)};

  /* @media (min-width: ${rem(media.lg)}) {
  } */
  .count-up {
    font-family: 'Rajdhani';
  }
`;

export const Box = styled.div`
  padding-left: ${rem(28)};
  padding-right: ${rem(28)};
`;

export const RowTag = styled.div`
  position: relative;
  height: ${rem(34)};
  display: flex;
  justify-content: space-between;
`;

export const TagNode = styled.div`
  position: absolute;
  background: ${theme.colors.tagNode};
  color: ${theme.colors.white};
  font-weight: bold;
  width: ${rem(110)};
  height: ${rem(30)};
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${rem(-8)};
`;

export const Triangle = styled.div`
  position: absolute;
  left: 0;
  bottom: ${rem(-10)};
`;

export const NodeName = styled.div`
  font-size: ${rem(32)};
  margin-bottom: ${rem(6)};
`;

export const RowPk = styled.div`
  width: 100%;
  padding: ${rem(8)};
  background: ${theme.colors.gray};
  display: flex;
  column-gap: ${rem(4)};
  margin-bottom: ${rem(24)};
`;

export const IconCopy = styled(Icon.Paste)`
  font-size: ${rem(18)};
  color: #9b9b9b;
  cursor: pointer;
`;

export const RowData = styled.div`
  display: flex;
  column-gap: ${rem(32)};
`;

export const BoxData = styled.div`
  padding: ${rem(30)} ${rem(56)};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: ${rem(2)} solid #d36bf8;
  border-bottom: ${rem(2)} solid #965bf4;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-position: 0 0, 100% 0;
  background-repeat: no-repeat;
  -webkit-background-size: ${rem(2)} 100%;
  -moz-background-size: ${rem(2)} 100%;
  background-size: ${rem(2)} 100%;
  background-image: linear-gradient(to bottom, #d36bf8 3.68%, #965bf4 100%),
    linear-gradient(to bottom, #d36bf8 3.68%, #965bf4 100%);
`;

export const BoxCapacity = styled(BoxData)`
  width: ${rem(350)};
`;

export const BoxChannel = styled(BoxData)`
  width: ${rem(190)};
`;

export const TitleData = styled.div`
  font-size: ${rem(20)};
  font-weight: 500;
  margin-bottom: ${rem(12)};
`;

export const ValueData = styled.div`
  font-size: ${rem(36)};
  font-weight: 600;
`;

export const ValueDataSmall = styled(ValueData)`
  font-size: ${rem(20)};
  font-weight: 600;
  align-self: flex-end;
  margin-bottom: ${rem(4)};
  transition: all 1s ease 1s;
`;

export const RowAmount = styled.div`
  display: flex;
  column-gap: ${rem(4)};
`;
