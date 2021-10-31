import React from 'react';

import { IChannel } from '../../../channel';
import { useGetChannelData } from '../../../hooks';
import { Node } from '../Node';

import { NodeListContainer } from './styled';

export const NodeList = () => {
  const { channels, isLoading } = useGetChannelData();
  return (
    <NodeListContainer>
      <h3>Channels</h3>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : channels ? (
        channels.map((channel: IChannel, i: number) => (
          <Node i={i} channel={channel} key={channel.channelId} />
        ))
      ) : (
        <h3>No data returned from backend API</h3>
      )}
    </NodeListContainer>
  );
};
