import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import useCopy from '@react-hook/copy';
import { toast } from 'react-toastify';
import CountUp from 'react-countup';

import triangle from '../../../../../public/icons/triangle-purple.svg';
import { TUnit } from '../../../channel';
import { UnitSwitcher } from '../../../../components/UnitSwithcer';
import { CursorPointer } from '../../Common';

import {
  NodeOwnerContainer,
  RowTag,
  TagNode,
  Box,
  Triangle,
  NodeName,
  RowPk,
  IconCopy,
  RowData,
  TitleData,
  ValueData,
  ValueDataSmall,
  RowAmount,
  BoxCapacity,
  BoxChannel,
} from './styled';

export const NodeOwner = ({
  nodeOwner,
  pk,
  channels,
  capacity,
  unit,
  setUnit,
}: {
  nodeOwner: string;
  pk: string;
  channels: number;
  capacity: number;
  unit: TUnit;
  setUnit: (unit: TUnit) => void;
}) => {
  const { copy } = useCopy(pk);
  const [isShowUnit, setIsShowUnit] = useState<Boolean>(false);

  const copyPk = () => {
    copy();
    toast.success(<FormattedMessage id="toast.copied.pk" />);
  };

  const tag = (
    <TagNode>
      <FormattedMessage id="node" />
      <Triangle>
        <Image src={triangle} width={8} height={8} alt="triangle" />
      </Triangle>
    </TagNode>
  );

  return (
    <NodeOwnerContainer>
      <RowTag>
        <div>{tag}</div>
        <UnitSwitcher unit={unit} setUnit={setUnit} />
      </RowTag>
      <Box>
        <NodeName>{nodeOwner}</NodeName>
        <RowPk>
          <CursorPointer onClick={copyPk}>
            <FormattedMessage id="public-key" />
          </CursorPointer>
          <CursorPointer onClick={copyPk}>{pk}</CursorPointer>
          <CursorPointer onClick={copyPk}>
            <IconCopy />
          </CursorPointer>
        </RowPk>
        <RowData>
          <BoxChannel>
            <TitleData>
              <FormattedMessage id="channels" />
            </TitleData>
            <ValueData className="animate__animated  animate__fadeInLeft">
              <CountUp delay={1} end={channels} duration={2} decimal="." className="count-up" />
            </ValueData>
          </BoxChannel>

          <BoxCapacity>
            <TitleData>
              <FormattedMessage id="capacity" />
            </TitleData>
            <RowAmount className="animate__animated  animate__fadeInLeft">
              <ValueData>
                <CountUp
                  delay={1}
                  end={capacity}
                  duration={2}
                  decimals={unit === 'BTC' ? 8 : 0}
                  decimal="."
                  separator=","
                  className="count-up"
                  onEnd={() => setIsShowUnit(true)}
                />
              </ValueData>
              {isShowUnit && (
                <ValueDataSmall className="animate__animated  animate__fadeInLeft">
                  {unit}
                </ValueDataSmall>
              )}
            </RowAmount>
          </BoxCapacity>
        </RowData>
      </Box>
    </NodeOwnerContainer>
  );
};
