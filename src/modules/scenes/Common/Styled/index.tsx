import { Button } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants } from '../../../styles';

const { media } = StylingConstants;

export const SizeS = styled.div`
  display: none;
  @media (min-width: ${rem(media.sm)}) {
    display: block;
  }
`;

export const SizeM = styled.div`
  display: none;
  @media (min-width: ${rem(media.md)}) {
    display: block;
  }
`;

export const SizeL = styled.div`
  display: none;
  @media (min-width: ${rem(media.lg)}) {
    display: block;
  }
`;

export const ButtonScale = styled(Button)`
  transition: all 0.3s ease 0s;
  :hover {
    transition: all 0.3s ease 0s;
    transform: scale(1.05);
  }
`;
