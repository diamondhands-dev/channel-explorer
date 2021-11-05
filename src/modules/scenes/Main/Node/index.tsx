import { Text } from 'comet-ui-kit';
import React from 'react';
import { FormattedNumber } from 'react-intl';

import { IChannel } from '../../../channel';

import { Bar, BarBond, Highlight, NodeContainer, Row, RowAlias, RowCapacity } from './styled';

export const Node = ({ channel, i }: { channel: IChannel; i: number }) => {
  const { alias, capacity, node1BaseFee, node1FeeRate, node2BaseFee, node2FeeRate } = channel;

  return (
    <>
      <NodeContainer bg={i % 2 !== 0}>
        <Row>
          <Highlight>
            <div>
              <RowAlias>
                <Text variant="normal">{alias}</Text>
              </RowAlias>
              <RowCapacity>
                <Text variant="normal">
                  <FormattedNumber value={capacity} />
                  &nbsp;sats
                </Text>
              </RowCapacity>
            </div>

            <div>
              <Text variant="normal">
                <FormattedNumber value={node1BaseFee} maximumSignificantDigits={8} />
                &nbsp;msats
              </Text>
              <br />
              <Text variant="normal">
                <FormattedNumber value={node1FeeRate} maximumSignificantDigits={8} />
                &nbsp;ppm
              </Text>
            </div>
            <Bar>
              <BarBond widthPercentage={Number(1) * 100} />
            </Bar>
            <div>
              <Text variant="normal">
                <FormattedNumber value={node2BaseFee} maximumSignificantDigits={8} />
                &nbsp;msats
              </Text>
              <br />
              <Text variant="normal">
                <FormattedNumber value={node2FeeRate} maximumSignificantDigits={8} /> &nbsp;ppm
              </Text>
            </div>
          </Highlight>
        </Row>
      </NodeContainer>
    </>
  );
};
