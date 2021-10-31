import { rem } from 'polished';
import styled from 'styled-components';

import { theme } from './../../modules/styles';

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(16)} ${rem(42)};
  background-color: ${theme.colors.headerBg};
`;

export const Right = styled.div``;

export const Left = styled.div`
  display: flex;
  column-gap: ${rem(32)};
`;
export const ProvideBy = styled.div`
  font-weight: 600;
  color: ${theme.colors.white};
  align-self: flex-end;
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: ${rem(4)};
  position: relative;
  padding-bottom: ${rem(4)};
`;

export const Title = styled.span`
  font-size: ${rem(30)};
  font-weight: bold;
  background: ${theme.colors.logo};
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const TitleSmall = styled(Title)`
  font-size: ${rem(18)};
`;

export const Logo = styled.div`
  position: absolute;
  right: ${rem(-30)};
  bottom: 0;
`;

export const Atag = styled.a`
  border-bottom: 1px solid ${theme.colors.white};
`;
