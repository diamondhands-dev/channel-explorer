const colors = {
  bg: '#E3DDEB',
  headerBg: '#202020',
  logo: 'linear-gradient(270deg, #9a4aff 0%, #f79413 97.48%)',
  tagNode: 'linear-gradient(270deg, #D36BF8 3.68%, #965BF4 100%)',
  tagChannel: 'linear-gradient(270deg, #FFB802 3.68%, #FF8717 100%)',
  unitSats: 'linear-gradient(180deg, #828282 34.9%, #434343 100%)',
  buttonCapacityBg: 'linear-gradient(180deg, #d171ff 0%, #7000ff 89.25%)',
  buttonCapacityBgHover: 'linear-gradient(180deg, #7000FF 0%, #D171FF 105.13%)',
  link: '#2FB6F0',
  black: '#000000',
  white: '#ffffff',
  gray: '#ECECEC',
  darkGray: '#8A8A8A',
  rat: '#D3D3D3',
  teal: '#BFFF07',
  orange: '#FF7A00',
  purple: '#6300FF',
  placeholderOrange: '#ffddb0',
  placeholderBar:
    'linear-gradient(270deg, rgba(154, 74, 255, 0.15) 0%, rgba(247, 148, 19, 0.15) 97.48%)',
};

const styles = {
  boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)',
  boxShadowBar: 'inset 0px 1px 3px rgba(0, 0, 0, 0.62)',
  boxShadowButtonCapacity: '0px 2px 2px #3b0989',
  boxShadowButtonCapacityHover: 'inset 0px 2px 0px rgba(59, 9, 137, 0.39)',
  borderGray: '1px solid #d2d2d2',
  borderDarkGray: '1px solid #d7d7d7',
  orange: '#FF8A16',
};

export interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string };
  styles: { [key in keyof typeof styles]: string };
}

export const theme: StyleClosetTheme = {
  colors,
  styles,
};
