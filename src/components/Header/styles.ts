import { rem } from 'polished';
import styled from 'styled-components';

import { theme } from './../../modules/styles';

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${rem(16)} ${rem(42)};
  background-color: ${theme.colors.black};
  /* @media (min-width: ${rem(media.lg)}) {
  } */
`;

export const Right = styled.div`
  margin-left: auto;
  display: grid;
  align-items: center;
  grid-column-gap: ${({ theme }) => rem(theme.comet.size.house)};
  grid-template-columns: auto auto auto;
`;

export const Left = styled.div``;

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
