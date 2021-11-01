import React from 'react';
import { FormattedMessage } from 'react-intl';

import { TUnit } from '../../../channel';

import { CapacityContainer, Row } from './styled';

export const Capacity = ({ unit }: { unit: TUnit }) => {
  const ttlCapa = 10000000000;
  return (
    <CapacityContainer>
      <Row>
        <div>REMOTE</div>
        <div>
          <div>Total Capacity :</div>
          <div>
            {ttlCapa}
            {unit}
          </div>
        </div>
        <div>LOCAL</div>
      </Row>
    </CapacityContainer>
  );
};
