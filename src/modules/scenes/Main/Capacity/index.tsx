import React, { useState } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';

import { TUnit } from '../../../channel';

import {
  Bar,
  BarBond,
  CapacityContainer,
  ColumnFee,
  FeeLocal,
  FeeRemote,
  RowCapacity,
  TextCapacity,
  TextCapacityValue,
  TextLocal,
  TextRemote,
  TtlCapacity,
} from './styled';

export const Capacity = ({ unit }: { unit: TUnit }) => {
  const ttlCapacity = 1000;
  const [isPaid, setIsPaid] = useState<Boolean>(false);

  const rowInfo = (
    <RowCapacity>
      <ColumnFee>
        <TextRemote>
          <FormattedMessage id="remote" />
        </TextRemote>
        <FeeRemote>
          <FormattedMessage id="fee" />
        </FeeRemote>
      </ColumnFee>
      <TtlCapacity>
        <TextCapacity>
          <FormattedMessage id="total-capacity" />
        </TextCapacity>
        <TextCapacityValue>
          <FormattedNumber value={ttlCapacity} />
        </TextCapacityValue>
        <TextCapacity>{unit}</TextCapacity>
      </TtlCapacity>
      <ColumnFee>
        <FeeLocal>
          <FormattedMessage id="fee" />
        </FeeLocal>
        <TextLocal>
          <FormattedMessage id="local" />
        </TextLocal>
      </ColumnFee>
    </RowCapacity>
  );

  const bar = (
    <Bar isPaid={isPaid}>
      <BarBond widthPercentage={Number(isPaid ? 0.5 : 0) * 100} />
    </Bar>
  );

  return (
    <CapacityContainer>
      <>
        {rowInfo}
        {bar}
      </>
    </CapacityContainer>
  );
};
