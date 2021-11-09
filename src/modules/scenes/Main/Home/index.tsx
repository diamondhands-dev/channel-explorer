import React, { useEffect, useState } from 'react';

import { TUnit } from '../../../channel';
import { LOCAL_STORAGE } from '../../../env';
import { btcOrSats } from '../../../helper';
import { useGetNodeData } from '../../../hooks';
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

  const {
    nodeInfo: { alias, pk, channels, capacity },
  } = useGetNodeData();

  const nodeOwner = alias;
  const formattedCapacity = btcOrSats({ sats: capacity, unit });

  return (
    <>
      <HomeBrowserContainer>
        <NodeOwner
          nodeOwner={nodeOwner}
          pk={pk}
          channels={channels}
          capacity={formattedCapacity}
          unit={unit}
          setUnit={setUnit}
        />
        <ChannelList unit={unit} nodeOwner={nodeOwner} />
      </HomeBrowserContainer>
    </>
  );
};
