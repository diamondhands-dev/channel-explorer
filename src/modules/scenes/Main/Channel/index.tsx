import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Collapse from 'react-css-collapse';
import { useMatchMedia } from 'comet-ui-kit';
import { rem } from 'polished';

import plus from '../../../../../public/icons/plus.svg';
import minus from '../../../../../public/icons/minus.svg';
import { TUnit } from '../../../channel';
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

export const Channel = ({ unit, nodeOwner }: { unit: TUnit; nodeOwner: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const channelName = 'CoinPayments';
  const channelId = '745420505213435904';
  const pk = '03afa7a8196dbca763ee6f9a34b634a7adc03f154e5d6979fe654db5606b5fb2b1';
  const url = `https://amboss.space/node/${pk}`;

  const { media } = StylingConstants;
  const sm = useMatchMedia({ query: `(min-width: ${rem(media.sm)})` });

  useEffect(() => {
    if (!isOpen && sm) setIsOpen(true);
  }, [sm, isOpen]);

  return (
    <ChannelContainer>
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
      <Capacity unit={unit} nodeOwner={nodeOwner} channelName={channelName} />
    </ChannelContainer>
  );
};
