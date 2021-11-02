import Image from 'next/image';
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import triangle from '../../../../../public/icons/triangle-orange.svg';
import { Search } from '../../../../components/Search';
import { TUnit } from '../../../channel';
import { useGetChannelData } from '../../../hooks';
import { Channel } from '../Channel';

import {
  ChannelHead,
  ChannelListContainer,
  ColumnSearch,
  RowTag,
  TagChannel,
  Triangle,
} from './styled';

export const ChannelList = ({ unit }: { unit: TUnit }) => {
  const { channels, isLoading } = useGetChannelData();
  const [search, setSearch] = useState('');
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
      <ChannelHead>
        <RowTag>
          <div>{tag}</div>
          <ColumnSearch>
            <Search search={search} setSearch={setSearch} />
          </ColumnSearch>
        </RowTag>
      </ChannelHead>
      <Channel unit={unit} />
      <Channel unit={unit} />
    </ChannelListContainer>
  );
};

// return (
//   <ChannelListContainer>
//     <h3>Channels</h3>
//     {isLoading ? (
//       <h3>Loading...</h3>
//     ) : channels ? (
//       channels.map((channel: IChannel, i: number) => (
//         <Node i={i} channel={channel} key={channel.channelId} />
//       ))
//     ) : (
//       <h3>No data returned from backend API</h3>
//     )}
//   </ChannelListContainer>
// );
