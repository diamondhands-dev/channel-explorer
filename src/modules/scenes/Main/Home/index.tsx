import React, { useState } from 'react';

import { TUnit } from '../../../channel';
import { ChannelList } from '../ChannelList';
import { NodeOwner } from '../NodeOwner';

import { HomeBrowserContainer } from './styled';

export const Home = () => {
  const [unit, setUnit] = useState<TUnit>('BTC');
  return (
    <>
      <HomeBrowserContainer>
        <NodeOwner
          nodeOwner="DiamondHands"
          pk="035b1ff29e8db1ba8f2a4f4f95db239b54069cb949b8cde329418e2a83da4f1b30"
          channels={338}
          capacity={'15.83473921'}
          unit={unit}
        />
        <ChannelList />
      </HomeBrowserContainer>
    </>
  );
};
