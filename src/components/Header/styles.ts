import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants, theme } from './../../modules/styles';

const { media } = StylingConstants;

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: ${rem(8)} ${rem(16)};
  background-color: ${theme.colors.headerBg};
  @media (min-width: ${rem(media.sm)}) {
    align-items: center;
    padding: ${rem(20)} ${rem(42)};
  }
`;

export const Right = styled.div`
  margin-top: ${rem(-8)};
  @media (min-width: ${rem(media.sm)}) {
    margin-top: ${rem(0)};
  }
`;

export const Left = styled.div`
  display: flex;
  column-gap: ${rem(32)};
  flex-direction: column;
  @media (min-width: ${rem(media.md)}) {
    flex-direction: row;
  }
`;
export const ProvideBy = styled.div`
  font-weight: 600;
  color: ${theme.colors.white};
  column-gap: ${rem(4)};
  display: flex;
  position: relative;
  margin-top: ${rem(4)};
  font-size: ${rem(14)};
  @media (min-width: ${rem(media.md)}) {
    margin-top: ${rem(0)};
    display: grid;
    grid-template-columns: auto auto auto;
    align-self: flex-end;
    padding-bottom: ${rem(6)};
  }
`;

export const Title = styled.span`
  font-size: ${rem(24)};
  font-weight: bold;
  background: ${theme.colors.logo};
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  @media (min-width: ${rem(media.md)}) {
    font-size: ${rem(30)};
  }
`;

export const Logo = styled.div`
  @media (min-width: ${rem(media.md)}) {
    position: absolute;
    right: ${rem(-30)};
    bottom: 0;
  }
`;

export const Atag = styled.a`
  text-decoration: underline;
  @media (min-width: ${rem(media.md)}) {
    text-decoration: none;
    border-bottom: 1px solid ${theme.colors.white};
  }
`;
