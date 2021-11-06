import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants, theme } from '../../../styles';
const { media } = StylingConstants;

export const ChannelListContainer = styled.div`
  width: 100%;
  max-width: ${rem(1360)};
  background: ${theme.colors.white};
  box-shadow: ${theme.styles.boxShadow};
  border-radius: ${rem(10)};
  padding-bottom: ${rem(16)};
  @media (min-width: ${rem(media.sm)}) {
    padding-bottom: ${rem(28)};
    padding-top: ${rem(10)};
  }
`;

export const TagChannel = styled.div`
  position: absolute;
  background: ${theme.colors.tagChannel};
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

export const RowTag = styled.div`
  position: relative;
  height: ${rem(34)};
  display: flex;
  flex-direction: column;
  @media (min-width: ${rem(media.sm)}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ColumnSearch = styled.div`
  margin-top: ${rem(50)};
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  @media (min-width: ${rem(media.sm)}) {
    margin-top: ${rem(0)};
    padding-top: ${rem(8)};
    margin-right: ${rem(28)};
  }
`;

export const ChannelHead = styled.div`
  border-bottom: ${theme.styles.borderGray};
  padding-bottom: ${rem(70)};
  @media (min-width: ${rem(media.sm)}) {
    padding-bottom: ${rem(12)};
    height: auto;
  }
`;
