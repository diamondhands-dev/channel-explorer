import Image from 'next/image';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
// import AutoSizer from 'react-virtualized-auto-sizer';
// import { FixedSizeList as List } from 'react-window';
// import InfiniteLoader from 'react-window-infinite-loader';
import { StickyContainer, Sticky } from 'react-sticky';
import { useDebounce } from 'use-debounce';

import triangle from '../../../../../public/icons/triangle-orange.svg';
import { Search } from '../../../../components/Search';
import { IChannel, TUnit } from '../../../channel';
import { useGetChannelData } from '../../../hooks';
import { Channel } from '../Channel';

import {
  ChannelHead,
  ChannelListContainer,
  ColumnSearch,
  RowTag,
  TagChannel,
  Triangle,
  TextWaiting,
} from './styled';

export const ChannelList = ({ unit, nodeOwner }: { unit: TUnit; nodeOwner: string }) => {
  const [search, setSearch] = useState('');
  const [value] = useDebounce(search, 1000);
  const { channels, isLoading, setIsLoading, setChannels } = useGetChannelData(value);

  const tag = (
    <TagChannel>
      <FormattedMessage id="channels" />
      <Triangle>
        <Image src={triangle} width={8} height={8} alt="triangle" />
      </Triangle>
    </TagChannel>
  );

  return (
    <ChannelListContainer>
      <StickyContainer>
        <Sticky>
          {({ style }) => (
            <ChannelHead style={style}>
              <RowTag>
                <div>{tag}</div>
                <ColumnSearch>
                  <Search
                    search={search}
                    setSearch={setSearch}
                    setIsLoading={setIsLoading}
                    setChannels={setChannels}
                    channels={channels}
                  />
                </ColumnSearch>
              </RowTag>
            </ChannelHead>
          )}
        </Sticky>
        {isLoading && <TextWaiting>Loading...</TextWaiting>}
        {!channels && !isLoading && <TextWaiting>No data returned from backend API</TextWaiting>}
        {channels &&
          channels.map((channel: IChannel) => (
            <Channel unit={unit} nodeOwner={nodeOwner} channel={channel} key={channel.channelId} />
          ))}
      </StickyContainer>
    </ChannelListContainer>
  );
};
