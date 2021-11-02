import React from 'react';
import { FormattedMessage } from 'react-intl';

import { TUnit } from '../../../channel';
import { Capacity } from '../Capacity';

import {
  ChannelContainer,
  ChannelName,
  Row,
  Title,
  Value,
  Atag,
  IconLink,
  ChannelInfo,
} from './styled';

export const Channel = ({ unit }: { unit: TUnit }) => {
  const channelName = 'CoinPayments';
  const channelId = '745420505213435904';
  const pk = '03afa7a8196dbca763ee6f9a34b634a7adc03f154e5d6979fe654db5606b5fb2b1';
  const url = `https://amboss.space/node/${pk}`;

  return (
    <ChannelContainer>
      <ChannelInfo>
        <ChannelName>{channelName}</ChannelName>
        <Row>
          <Title>
            <FormattedMessage id="channel-id" />
          </Title>
          <Value>
            {/* Memo: link to Ambos */}
            <Atag href={url} rel="noopener noreferrer" target="_blank">
              <span>{channelId}</span>
              <IconLink />
            </Atag>
          </Value>
        </Row>
        <Row>
          <Title>
            <FormattedMessage id="public-key" />
          </Title>
          <Value>{pk}</Value>
        </Row>
      </ChannelInfo>
      <Capacity unit={unit} />
    </ChannelContainer>
  );
};
