import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Collapse from 'react-css-collapse';
import { useMatchMedia } from 'comet-ui-kit';
import { rem } from 'polished';

import plus from '../../../../../public/icons/plus.svg';
import minus from '../../../../../public/icons/minus.svg';
import { IChannel, TUnit } from '../../../channel';
import { Capacity } from '../Capacity';
import { StylingConstants } from '../../../styles';

import {
  ChannelContainer,
  ChannelName,
  Row,
  Title,
  Value,
  Atag,
  IconLink,
  ChannelInfo,
  ToggleInformation,
} from './styled';

export const Channel = ({
  unit,
  nodeOwner,
  channel,
}: {
  unit: TUnit;
  nodeOwner: string;
  channel: IChannel;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    alias,
    channelId,
    node2PubKey,
    capacity,
    node1BaseFee,
    node1FeeRate,
    node2BaseFee,
    node2FeeRate,
  } = channel;

  const channelName = alias;
  const pk = node2PubKey;
  const url = `https://amboss.space/node/${pk}`;
  const localBaseFee = node1BaseFee;
  const remoteBaseFee = node2BaseFee;
  const localFeeRate = node1FeeRate;
  const remoteFeeRate = node2FeeRate;

  const { media } = StylingConstants;
  const sm = useMatchMedia({ query: `(min-width: ${rem(media.sm)})` });

  useEffect(() => {
    if (!isOpen && sm) setIsOpen(true);
  }, [sm, isOpen]);

  return (
    <ChannelContainer key={channel.node2PubKey}>
      <ChannelInfo>
        <ChannelName>{channelName}</ChannelName>
        <ToggleInformation onClick={() => setIsOpen(!isOpen)}>
          <Image src={isOpen ? minus : plus} alt="open" />
          <FormattedMessage id="channel-information" />
        </ToggleInformation>
        <Collapse isOpen={isOpen}>
          <Row>
            <Title>
              <FormattedMessage id="channel-id" />
            </Title>
            <Value>
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
        </Collapse>
      </ChannelInfo>
      <Capacity
        unit={unit}
        channelId={channelId}
        nodeOwner={nodeOwner}
        channelName={channelName}
        capacity={capacity}
        remoteBaseFee={remoteBaseFee}
        localBaseFee={localBaseFee}
        localFeeRate={localFeeRate}
        remoteFeeRate={remoteFeeRate}
      />
    </ChannelContainer>
  );
};
