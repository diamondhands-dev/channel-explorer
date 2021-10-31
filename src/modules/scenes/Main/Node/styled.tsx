import { rem, transitions } from 'polished';
import styled from 'styled-components';

interface BgProps {
  bg: boolean | string;
}

export const NodeContainer = styled.div<BgProps>`
  background: ${(props) => !props.bg && props.theme.comet.color.bg.hover};
  padding: ${rem(8)} ${rem(32)};
  width: ${rem(800)};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: auto ${rem(42)};
  align-items: center;
`;

export const RowAlias = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: end;
  grid-column-gap: ${({ theme }) => rem(theme.comet.size.street)};
  margin-bottom: ${({ theme }) => rem(theme.comet.size.box)};
`;

export const Highlight = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
`;

export const RowCapacity = styled.div``;

export const BarBond = styled.div<{ widthPercentage: number }>`
  /* position: absolute; */
  height: 8px;
  width: calc(${({ widthPercentage }) => widthPercentage}% + 1px);
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.comet.color.primary.normal};
  border-radius: ${({ theme }) => rem(theme.comet.size.box)};
  ${({ theme }) => transitions(['width'], theme.comet.duration.normal)};
`;

export const Bar = styled.div`
  /* height: ${({ theme }) => rem(theme.comet.size.drawer)}; */
  height: 100%;
  border-radius: ${({ theme }) => rem(theme.comet.size.drawer)};
  position: relative;
  margin-right: ${({ theme }) => rem(theme.comet.size.closet)};
  margin-bottom: ${({ theme }) => rem(theme.comet.size.closet + theme.comet.size.house)};
  /* background: ${({ theme }) => theme.comet.color.warning.normal}; */
  border-radius: ${({ theme }) => rem(theme.comet.size.box)};
  display: flex;
  align-items: center;
`;
