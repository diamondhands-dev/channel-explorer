import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants } from '../../../styles';
const { media } = StylingConstants;

export const HomeBrowserContainer = styled.div`
  display: grid;
  padding-top: ${({ theme }) => rem(theme.comet.size.drawer)};
  padding-bottom: ${({ theme }) => rem(theme.comet.size.room)};
  padding-left: ${({ theme }) => rem(theme.comet.size.closet)};
  padding-right: ${({ theme }) => rem(theme.comet.size.closet)};
  margin-bottom: ${({ theme }) => rem(theme.comet.size.town)};
  align-items: center;
  @media (min-width: ${rem(media.sm)}) {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;
  }
`;
