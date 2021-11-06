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

const Unit = styled.div<isActivateProps>`
  padding: ${rem(4)} 0;
  box-shadow: ${({ isActivate }) => isActivate && '1px 1px 2px rgba(0, 0, 0, 0.46)'};
  background: ${({ isActivate }) => (isActivate ? theme.colors.unitActiveBg : theme.colors.rat)};
  color: ${({ isActivate }) => (isActivate ? theme.colors.teal : theme.colors.darkGray)};
  transition: all 0.5s ease 0s;
`;

export const Right = styled(Unit)`
  border-top-right-radius: ${rem(5)};
  border-bottom-right-radius: ${rem(5)};
`;

export const Left = styled(Unit)`
  border-top-left-radius: ${rem(5)};
  border-bottom-left-radius: ${rem(5)};
`;
