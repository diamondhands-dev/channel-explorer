import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { theme } from './theme';
export { theme } from './theme';

export const StylingConstants = {
  maxWidth: 445,
  media: {
    mobile: 375,
    xs: 414,
    sm: 576,
    md: 768,
    lg: 1068,
    xl: 1250,
  },
};

export const GlobalStyle = createGlobalStyle`
${normalize}

  * {
    box-sizing: border-box;
    font-family: 'Raleway' ;
  }

  *:focus {
    outline: none;
  }

  body {
    background-color: ${theme.colors.bg}
  }

`;
