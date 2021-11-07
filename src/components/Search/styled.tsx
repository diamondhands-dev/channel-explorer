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
    margin-top: ${rem(-10)};
    font-size: ${rem(16)};
  }

  .icDcXj,
  .ewJpyQ {
    .fzAUAg,
    .bDcXcY {
      color: ${theme.styles.orange};
    }
  }

  .fzAUAg,
  .sc-dWddBi {
    color: ${theme.colors.placeholderOrange};
  }
`;

export const SearchIcon = styled(Icon.Search)`
  font-size: ${rem(20)};
`;
