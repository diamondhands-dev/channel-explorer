import { rem } from 'polished';
import styled from 'styled-components';

import { theme } from '../../../styles';

// import { StylingConstants } from '../../../styles';
// const { media } = StylingConstants;

export const CapacityContainer = styled.div`
  padding: ${rem(28)} ${rem(32)};
  width: 100%;
  border: ${theme.styles.borderDarkGray};
  box-sizing: border-box;
  box-shadow: ${theme.styles.boxShadow};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
