import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants } from '../../../styles';

const { media } = StylingConstants;

export const HomeBrowserContainer = styled.div`
  padding: ${rem(20)} ${rem(14)};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${rem(media.sm)}) {
    padding: ${rem(32)} ${rem(24)};
  }
`;
