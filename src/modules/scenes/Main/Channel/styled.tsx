import { Icon } from 'comet-ui-kit';
import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants, theme } from '../../../styles';

const { media } = StylingConstants;

export const ChannelContainer = styled.div`
  padding: ${rem(28)} ${rem(18)};
  width: 100%;
  max-width: ${rem(1360)};
  border-bottom: ${theme.styles.borderGray};
  @media (min-width: ${rem(media.sm)}) {
    padding: ${rem(32)} ${rem(28)};
  }
`;

export const ChannelInfo = styled.div`
  margin-bottom: ${rem(16)};
  @media (min-width: ${rem(media.sm)}) {
    margin-bottom: ${rem(28)};
  }
`;

export const ChannelName = styled.div`
  font-size: ${rem(22)};
  margin-bottom: ${rem(10)};
  @media (min-width: ${rem(media.sm)}) {
    margin-bottom: ${rem(8)};
    font-size: ${rem(28)};
  }
`;

export const Row = styled.div`
  display: flex;
  column-gap: ${rem(12)};
  padding-top: ${rem(8)};
  word-break: break-all;
  @media (min-width: ${rem(media.sm)}) {
    column-gap: ${rem(32)};
  }
  @media (min-width: ${rem(media.lg)}) {
    align-items: center;
  }
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: ${rem(14)};
  white-space: nowrap;
  @media (min-width: ${rem(media.sm)}) {
    font-size: ${rem(16)};
  }
`;

export const Value = styled.div`
  font-weight: 500;
`;

export const Atag = styled.a`
  font-weight: 500;
  color: ${theme.colors.link};
  align-items: center;
  display: flex;
  column-gap: ${rem(4)};
`;

export const IconLink = styled(Icon.ExternalLink)`
  font-size: ${rem(12)};
`;

export const ToggleInformation = styled.div`
  cursor: pointer;
  font-size: ${rem(14)};
  display: flex;
  column-gap: ${rem(4)};
  align-items: center;
  margin-bottom: ${rem(12)};
  @media (min-width: ${rem(media.sm)}) {
    display: none;
  }
`;
