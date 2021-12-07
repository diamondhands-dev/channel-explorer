import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { StickyContainer, Sticky } from 'react-sticky';
import { useDebounce } from 'use-debounce';
import { ScaleLoader } from 'react-spinners';
import { useMatchMedia } from 'comet-ui-kit';
import { rem } from 'polished';
import ReactPaginate from 'react-paginate';

import triangle from '../../../../../public/icons/triangle-orange.svg';
import { Search } from '../../../../components/Search';
import { IChannel, TUnit } from '../../../channel';
import { useGetChannelData, RequestInvoiceProvider } from '../../../hooks';
import { Channel } from '../Channel';
import { StylingConstants } from '../../../styles';

import {
  ChannelHead,
  ChannelListContainer,
  ColumnSearch,
  RowTag,
  TagChannel,
  Triangle,
  TextWaiting,
  RowLoader,
} from './styled';

function Items({ currentItems, unit, nodeOwner }) {
  return (
    <>
      {currentItems &&
        currentItems.map((channel: IChannel) => (
          <Channel unit={unit} nodeOwner={nodeOwner} channel={channel} key={channel.channelId} />
        ))}
    </>
  );
}

export const ChannelList = ({ unit, nodeOwner }: { unit: TUnit; nodeOwner: string }) => {
  const [search, setSearch] = useState('');
  const [value] = useDebounce(search, 1000);
  const { channels, isLoading, setIsLoading, setChannels } = useGetChannelData(value);
  const [monitorChannelId, setMonitorChannelId] = useState<string>(null);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(channels.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(channels.length / itemsPerPage));
  }, [itemOffset, channels, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % channels.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setItemOffset(0);
  }, [search]);

  const valueProps = useMemo(
    () => ({ monitorChannelId, setMonitorChannelId }),
    [monitorChannelId, setMonitorChannelId],
  );

  const tag = (
    <TagChannel>
      <FormattedMessage id="channels" />
      <Triangle>
        <Image src={triangle} width={8} height={8} alt="triangle" />
      </Triangle>
    </TagChannel>
  );

  const { media } = StylingConstants;
  const sm = useMatchMedia({ query: `(min-width: ${rem(media.sm)})` });

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
        {isLoading &&
          (sm ? (
            <RowLoader>
              <ScaleLoader margin={3} color="#36D7B7" />
            </RowLoader>
          ) : (
            <TextWaiting>Loading...</TextWaiting>
          ))}
        {!channels && !isLoading && <TextWaiting>No data returned from backend API</TextWaiting>}
        {channels && (
          <RequestInvoiceProvider value={valueProps}>
            <Items currentItems={currentItems} unit={unit} nodeOwner={nodeOwner} />
            <ReactPaginate
              className="pagination"
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </RequestInvoiceProvider>
        )}
      </StickyContainer>
    </ChannelListContainer>
  );
};
