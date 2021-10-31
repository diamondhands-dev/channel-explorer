import React from 'react';

import { NodeList } from '../NodeList';
import { Search } from '../Search';

import { HomeBrowserContainer } from './styled';

export const Home = () => {
  return (
    <>
      <HomeBrowserContainer>
        <Search />
        <h2>Node Info</h2>
        <NodeList />
      </HomeBrowserContainer>
    </>
  );
};
