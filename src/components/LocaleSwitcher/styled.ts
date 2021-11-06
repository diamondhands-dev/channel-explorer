import { Dropdown } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants, theme } from '../../modules/styles';
const { media } = StylingConstants;
export const Container = styled.div`
  /* Avoid Bug: can't transparent color after theme change */
  button {
    background: transparent;
  }
  .sc-dacGJm {
    display: none;
    @media (min-width: ${rem(media.sm)}) {
      display: block;
      margin-left: ${rem(16)};
    }
  }
`;

export const CustomDropDown = styled(Dropdown)``;

export const TextChosenLanguage = styled.span`
  color: ${theme.colors.white};
`;

export const RowSelected = styled.div`
  display: flex;
  column-gap: ${rem(8)};
`;

export const Logo = styled.div``;

export const Selected = styled.div`
  display: none;
  @media (min-width: ${rem(media.sm)}) {
    display: block;
  }
`;
