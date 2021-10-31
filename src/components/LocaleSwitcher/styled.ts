import { Dropdown } from 'comet-ui-kit';
import styled from 'styled-components';

import { theme } from '../../modules/styles';

export const Container = styled.div`
  /* Avoid Bug: can't transparent color after theme change */
  button {
    background: transparent;
  }
`;

export const CustomDropDown = styled(Dropdown)``;

export const TextChosenLanguage = styled.span`
  color: ${theme.colors.white};
`;
