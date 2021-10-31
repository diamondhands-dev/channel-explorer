import React from 'react';
import { useIntl } from 'react-intl';

import { SearchIcon, SearchInput } from './styled';

export const Search = ({ search, setSearch }) => {
  const { formatMessage } = useIntl();

  return (
    <SearchInput
      size="city"
      value={search}
      onChange={(evt) => {
        setSearch(evt.target.value);
      }}
      placeholder={formatMessage({ id: 'placeholder.search' })}
      right={<SearchIcon size="country" />}
    />
  );
};