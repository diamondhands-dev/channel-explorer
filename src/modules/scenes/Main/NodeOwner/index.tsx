import React from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import useCopy from '@react-hook/copy';
import { toast } from 'react-toastify';

import triangle from '../../../../../public/icons/triangle-purple.svg';
import { TUnit } from '../../../channel';
import { UnitSwitcher } from '../../../../components/UnitSwithcer';

import {
  NodeOwnerContainer,
  RowTag,
  TagNode,
  Box,
  Triangle,
  NodeName,
  RowPk,
  IconCopy,
  BoxData,
  RowData,
  TitleData,
  ValueData,
  ValueDataSmall,
  RowAmount,
} from './styled';

export const NodeOwner = ({
  nodeOwner,
  pk,
  channels,
  capacity,
  unit,
}: {
  nodeOwner: string;
  pk: string;
  channels: number;
  capacity: string;
  unit: TUnit;
}) => {
  const { copy } = useCopy(pk);

  const copyPk = () => {
    copy();
    toast.success(<FormattedMessage id="toast.copied" />);
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
        <UnitSwitcher />
      </RowTag>
      <Box>
        <NodeName>{nodeOwner}</NodeName>
        <RowPk>
          <div>
            <FormattedMessage id="public-key" />
          </div>
          <div>{pk}</div>
          <div>
            <IconCopy onClick={copyPk} />
          </div>
        </RowPk>
        <RowData>
          <BoxData>
            <TitleData>
              <FormattedMessage id="channels" />
            </TitleData>
            <ValueData>{channels}</ValueData>
          </BoxData>

          <BoxData>
            <TitleData>
              <FormattedMessage id="capacity" />
            </TitleData>
            <RowAmount>
              <ValueData>{capacity}</ValueData>
              <ValueDataSmall>{unit}</ValueDataSmall>
            </RowAmount>
          </BoxData>
        </RowData>
      </Box>
    </NodeOwnerContainer>
  );
};
