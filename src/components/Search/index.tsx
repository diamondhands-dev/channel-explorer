import React from 'react';
import { useIntl } from 'react-intl';

import { theme } from '../../modules/styles';

import { SearchIcon, SearchInput } from './styled';

export const Search = ({ search, setSearch, setIsLoading, channels, setChannels }) => {
  const { formatMessage } = useIntl();

  return (
    <SearchInput
      size="city"
      value={search}
      onChange={(evt) => {
        if (channels.length > 0) {
          setIsLoading(true);
          setChannels([]);
        }

        setSearch(evt.target.value);
      }}
      placeholder={formatMessage({ id: 'placeholder.search' })}
      placeholderColor={theme.colors.placeholderSearch}
      borderActiveColor={theme.colors.orange}
      right={<SearchIcon size="country" />}
    />
  );
};
