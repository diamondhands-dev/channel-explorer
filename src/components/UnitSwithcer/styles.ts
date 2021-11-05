import { rem } from 'polished';
import styled from 'styled-components';

import { theme } from '../../modules/styles';

interface isActivateProps {
  isActivate: boolean;
}

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
  border-radius: ${rem(10)};
  cursor: pointer;
  background: ${theme.colors.rat};
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.59);
`;

export const Right = styled.div<isActivateProps>`
  padding: ${rem(4)} 0;
  background: ${theme.colors.rat};
  border-top-right-radius: ${rem(5)};
  border-bottom-right-radius: ${rem(5)};
  color: ${theme.colors.darkGray};
  box-shadow: ${(props) => props.isActivate && '1px 1px 2px rgba(0, 0, 0, 0.46)'};
`;

export const Left = styled.div<isActivateProps>`
  padding: ${rem(4)} 0;
  background: ${theme.colors.unitSats};
  border-top-left-radius: ${rem(5)};
  border-bottom-left-radius: ${rem(5)};
  color: ${theme.colors.teal};
  box-shadow: ${(props) => props.isActivate && '1px 1px 2px rgba(0, 0, 0, 0.46)'};
`;
