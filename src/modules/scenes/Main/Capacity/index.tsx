import React, { useState } from 'react';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import Image from 'next/image';

import pointingOrange from '../../../../../public/icons/pointing-orange.svg';
import pointingPurple from '../../../../../public/icons/pointing-purple.svg';
import { TUnit } from '../../../channel';

import {
  Bar,
  BarBond,
  CapacityContainer,
  ColumnFee,
  FeeLocal,
  FeeRemote,
  Guide,
  MaxReceive,
  MaxSend,
  RowCapacity,
  TextCapacity,
  TextCapacityValue,
  TextLocal,
  TextRemote,
  TtlCapacity,
  ButtonView,
  MaxGuide,
  CapacityValue,
  TextValueAmount,
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

  const value = '---------';
  const valueRemote = value;
  const valueLocal = value;

  const rowCapacityValue = (
    <Guide>
      <MaxReceive>
        <MaxGuide>
          <Image src={pointingOrange} alt="pointing-receive" />
          <FormattedMessage id="max-receive" />
        </MaxGuide>
        <CapacityValue>
          <TextValueAmount>{valueRemote}</TextValueAmount>
          <div>{unit}</div>
        </CapacityValue>
      </MaxReceive>
      <ButtonView>
        <FormattedMessage id="view-button" />
      </ButtonView>
      <MaxSend>
        <MaxGuide>
          <FormattedMessage id="max-send" />
          <Image src={pointingPurple} alt="pointing-send" />
        </MaxGuide>
        <CapacityValue>
          <TextValueAmount>{valueLocal}</TextValueAmount>
          <div>{unit}</div>
        </CapacityValue>
      </MaxSend>
    </Guide>
  );

  return (
    <CapacityContainer>
      <>
        {rowInfo}
        {bar}
        {rowCapacityValue}
      </>
    </CapacityContainer>
  );
};
