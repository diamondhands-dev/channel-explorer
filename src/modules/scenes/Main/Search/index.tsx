import { Text } from 'comet-ui-kit';
import React from 'react';

import { SearchColumn, SearchContainer } from './styled';

export const Search = () => {
  return (
    <SearchContainer>
      <SearchColumn>
        <Text variant="title-xs">
          {/* <FormattedMessage id="title.add-custom-network" /> */}
          Search
        </Text>
      </SearchColumn>
    </SearchContainer>
  );
};
