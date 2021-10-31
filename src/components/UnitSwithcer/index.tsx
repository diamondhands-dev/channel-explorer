import React from 'react';

import { UnitSwitcherContainer, Left, Right, Switcher } from './styles';

export const UnitSwitcher = () => {
  return (
    <UnitSwitcherContainer>
      <Switcher>
        <Left>sats</Left>
        <Right>BTC</Right>
      </Switcher>
    </UnitSwitcherContainer>
  );
};
