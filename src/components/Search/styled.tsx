import { Icon, TextInput } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants, theme } from '../../modules/styles';

const { media } = StylingConstants;

export const SearchInput = styled(TextInput)`
  width: 100%;
  font-size: ${rem(14)};
  height: ${rem(80)};
  @media (min-width: ${rem(media.sm)}) {
    width: ${rem(350)};
    padding-left: 0;
    padding-right: 0;
    margin-top: ${({ theme }) => rem(-10)};
    font-size: ${rem(16)};
  }

  /* Development */
  .iEbboh {
    .fzAUAg {
      color: ${theme.colors.placeholderOrange};
    }
  }

  .hnDFEq {
    border-color: ${theme.styles.orange};
    .fzAUAg {
      color: ${theme.styles.orange};
    }
  }

  /* Production */
  .kErWcB {
    .sc-dWddBi {
      color: ${theme.colors.placeholderOrange};
    }
  }

  .ctoQuI {
    .sc-dWddBi {
      color: ${theme.colors.placeholderOrange};
    }
  }

  .ebaotP {
    border-color: ${theme.styles.orange};
    .sc-dWddBi {
      color: ${theme.styles.orange};
    }
  }
`;

export const SearchIcon = styled(Icon.Search)`
  font-size: ${rem(20)};
`;
