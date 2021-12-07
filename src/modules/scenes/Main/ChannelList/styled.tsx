import { rem } from 'polished';
import styled from 'styled-components';

import { StylingConstants, theme } from '../../../styles';
const { media } = StylingConstants;

export const ChannelListContainer = styled.div`
  width: 100%;
  max-width: ${rem(1360)};
  background: ${theme.colors.white};
  box-shadow: ${theme.styles.boxShadow};
  border-radius: ${rem(10)};
  padding-bottom: ${rem(16)};
  @media (min-width: ${rem(media.sm)}) {
    padding-bottom: ${rem(18)};
  }

  /* Ref: https://github.com/AdeleD/react-paginate/issues/220 */
  .pagination {
    display: flex;
    justify-content: center;
    cursor: pointer;
    flex-wrap: wrap;
    padding-left: 0;
    margin: 0;
    padding-top: ${rem(18)};
    border-radius: 4px;
  }
  .pagination > li {
    display: inline;
  }
  .pagination > li > a,
  .pagination > li > span {
    font-family: 'Rajdhani' !important;
    font-weight: 500;
    position: relative;
    float: left;
    padding: ${rem(6)} ${rem(12)};
    line-height: 1.42857143;
    text-decoration: none;
    color: #2c689c;
    background-color: #fff;
    border: 1px solid #ddd;
    margin-left: -1px;
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span {
    margin-left: 0;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
  }
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-bottom-right-radius: 4px;
    border-top-right-radius: 4px;
  }
  .pagination > li > a:hover,
  .pagination > li > span:hover,
  .pagination > li > a:focus,
  .pagination > li > span:focus {
    z-index: 2;
    color: #1b4060;
    background-color: #eeeeee;
    border-color: #ddd;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    z-index: 3;
    color: #fff;
    background-color: #2c689c;
    border-color: #2c689c;
    cursor: default;
  }
  .pagination > .disabled > span,
  .pagination > .disabled > span:hover,
  .pagination > .disabled > span:focus,
  .pagination > .disabled > a,
  .pagination > .disabled > a:hover,
  .pagination > .disabled > a:focus {
    color: #777777;
    background-color: #fff;
    border-color: #ddd;
    cursor: not-allowed;
  }
  .pagination-lg > li > a,
  .pagination-lg > li > span {
    padding: 10px 16px;
    font-size: 20px;
    line-height: 1.3333333;
  }
  .pagination-lg > li:first-child > a,
  .pagination-lg > li:first-child > span {
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
  }
  .pagination-lg > li:last-child > a,
  .pagination-lg > li:last-child > span {
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
  }
  .pagination-sm > li > a,
  .pagination-sm > li > span {
    padding: 5px 10px;
    font-size: 14px;
    line-height: 1.5;
  }
  .pagination-sm > li:first-child > a,
  .pagination-sm > li:first-child > span {
    border-bottom-left-radius: 3px;
    border-top-left-radius: 3px;
  }
  .pagination-sm > li:last-child > a,
  .pagination-sm > li:last-child > span {
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
`;

export const TagChannel = styled.div`
  position: absolute;
  background: ${theme.colors.tagChannel};
  color: ${theme.colors.white};
  font-weight: bold;
  width: ${rem(110)};
  height: ${rem(30)};
  display: flex;
  justify-content: center;
  align-items: center;
  left: ${rem(-8)};
  top: ${rem(-5)};
  @media (min-width: ${rem(media.sm)}) {
    top: auto;
  }
`;

export const Triangle = styled.div`
  position: absolute;
  left: 0;
  bottom: ${rem(-10)};
`;

export const RowTag = styled.div`
  position: relative;
  height: ${rem(20)};
  display: flex;
  flex-direction: column;
  @media (min-width: ${rem(media.sm)}) {
    height: ${rem(34)};
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ColumnSearch = styled.div`
  margin-top: ${rem(40)};
  padding-left: ${rem(16)};
  padding-right: ${rem(16)};
  @media (min-width: ${rem(media.sm)}) {
    padding-right: ${rem(0)};
    margin-top: ${rem(0)};
    padding-top: ${rem(14)};
    margin-right: ${rem(28)};
  }
`;

export const ChannelHead = styled.div`
  border-top-left-radius: ${rem(10)};
  border-top-right-radius: ${rem(10)};
  z-index: 10;
  background: ${theme.colors.white};
  border-bottom: ${theme.styles.borderGray};
  padding-bottom: ${rem(70)};
  box-shadow: ${theme.styles.boxShadowRowBottom};
  @media (min-width: ${rem(media.sm)}) {
    padding-top: ${rem(10)};
    padding-bottom: ${rem(24)};
    height: auto;
  }
`;

export const TextWaiting = styled.div`
  text-align: center;
  font-size: ${rem(24)};
  margin-top: ${rem(18)};
`;

export const RowLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: ${rem(24)};
`;
