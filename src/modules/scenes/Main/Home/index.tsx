import React, { useEffect, useState } from 'react';

import { TUnit } from '../../../channel';
import { LOCAL_STORAGE } from '../../../env';
import { btcOrSats } from '../../../helper';
import { ChannelList } from '../ChannelList';
import { NodeOwner } from '../NodeOwner';

import { HomeBrowserContainer } from './styled';

export const Home = () => {
  const localStorage = typeof window !== 'undefined' && window.localStorage;
  const storedUnit = localStorage && (localStorage.getItem(LOCAL_STORAGE.Unit) as 'BTC' | 'sats');
  const [unit, setUnit] = useState<TUnit>('sats');
  useEffect(() => {
    if (storedUnit && unit !== storedUnit) {
      setUnit(storedUnit);
    }
  }, [localStorage, storedUnit, unit]);

  const nodeOwner = 'DiamondHands';
  const pk = '035b1ff29e8db1ba8f2a4f4f95db239b54069cb949b8cde329418e2a83da4f1b30';
  const channels = 338;
  const capacity = btcOrSats({ sats: Number('1583473921'), unit });

  return (
    <>
      <HomeBrowserContainer>
        <NodeOwner
          nodeOwner={nodeOwner}
          pk={pk}
          channels={channels}
          capacity={capacity}
          unit={unit}
          setUnit={setUnit}
        />
        <ChannelList unit={unit} nodeOwner={nodeOwner} />
      </HomeBrowserContainer>
    </>
  );
};
