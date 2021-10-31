import { rem } from 'polished';
import styled from 'styled-components';

import { theme } from '../../modules/styles';

export const UnitSwitcherContainer = styled.div`
  padding-right: ${rem(30)};
  align-self: center;
`;

export const Switcher = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  text-align: center;
  font-size: ${rem(14)};
  font-weight: 700;
  width: ${rem(88)};
  box-shadow: inset 0px -1px 0px #ffffff, inset 0px 1px 2px rgba(0, 0, 0, 0.59);
  border-radius: ${rem(10)};
  cursor: pointer;
`;

export const Right = styled.div`
  padding: ${rem(4)} 0;
  background: ${theme.colors.rat};
  border-top-right-radius: ${rem(10)};
  border-bottom-right-radius: ${rem(10)};
  color: ${theme.colors.darkGray};
`;

export const Left = styled.div`
  padding: ${rem(4)} 0;
  background: ${theme.colors.unitSats};
  border-top-left-radius: ${rem(10)};
  border-bottom-left-radius: ${rem(10)};
  color: ${theme.colors.teal};
  /*  Effect: not selected */
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.46);
`;
