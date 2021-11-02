import { Icon } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

import { theme } from '../../../styles';

// import { StylingConstants } from '../../../styles';
// const { media } = StylingConstants;

export const ChannelContainer = styled.div`
  padding: ${rem(32)} ${rem(28)};
  width: 100%;
  max-width: ${rem(1360)};
  border-bottom: ${theme.styles.borderGray};
`;

export const ChannelInfo = styled.div`
  margin-bottom: ${rem(28)};
`;

export const ChannelName = styled.div`
  font-size: ${rem(28)};
  margin-bottom: ${rem(16)};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${rem(32)};
  margin-bottom: ${rem(8)};
`;

export const Title = styled.div`
  font-weight: bold;
`;

export const Value = styled.div`
  font-weight: 500;
`;

export const Atag = styled.a`
  font-weight: 500;
  color: ${theme.colors.link};
  display: flex;
  align-items: center;
  column-gap: ${rem(4)};
`;

export const IconLink = styled(Icon.ExternalLink)`
  font-size: ${rem(12)};
`;
