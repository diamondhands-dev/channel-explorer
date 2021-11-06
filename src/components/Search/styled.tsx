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

  .sc-hzMMVR,
  .iEbboh {
    box-sizing: border-box;
    box-shadow: inset 0px 0px 1.5px rgba(0, 0, 0, 0.33);
  }

  .iEbboh,
  .kErWcB,
  .sc-dWddBi,
  .ctoQuI,
  .sc-dWddBi {
    .fzAUAg {
      color: ${theme.colors.placeholderOrange};
    }
  }

  .fzAUAg,
  .sc-dWddBi {
    color: ${theme.styles.orange};
  }
  .hnDFEq,
  .ebaotP {
    border-color: ${theme.styles.orange};
  }
`;

export const SearchIcon = styled(Icon.Search)`
  font-size: ${rem(20)};
`;
