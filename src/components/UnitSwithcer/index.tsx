import React from 'react';

import { TUnit } from '../../modules/channel';
import { LOCAL_STORAGE } from '../../modules/env';

import { UnitSwitcherContainer, Left, Right, Switcher } from './styles';

export const UnitSwitcher = ({
  setUnit,
  unit,
}: {
  unit: TUnit;
  setUnit: (unit: TUnit) => void;
}) => {
  const localStorage = typeof window !== 'undefined' && window.localStorage;
  return (
    <UnitSwitcherContainer>
      <Switcher>
        <Left
          onClick={() => {
            setUnit('sats');
            localStorage && localStorage.setItem(LOCAL_STORAGE.Unit, 'sats');
          }}
          isActivate={unit === 'sats'}
        >
          sats
        </Left>
        <Right
          onClick={() => {
            setUnit('BTC');
            localStorage && localStorage.setItem(LOCAL_STORAGE.Unit, 'BTC');
          }}
          isActivate={unit === 'BTC'}
        >
          BTC
        </Right>
      </Switcher>
    </UnitSwitcherContainer>
  );
};
