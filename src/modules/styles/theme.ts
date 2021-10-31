const colors = {
  bg: '#E3DDEB',
  headerBg: '#202020',
  logo: 'linear-gradient(270deg, #9a4aff 0%, #f79413 97.48%)',
  tagNode: 'linear-gradient(270deg, #D36BF8 3.68%, #965BF4 100%)',
  tagChannel: 'linear-gradient(270deg, #FFB802 3.68%, #FF8717 100%)',
  unitSats: 'linear-gradient(180deg, #828282 34.9%, #434343 100%)',
  black: '#000000',
  white: '#ffffff',
  gray: '#ECECEC',
  darkGray: '#8A8A8A',
  rat: '#D3D3D3',
  teal: '#BFFF07',
  placeholderOrange: '#ffddb0',
  orange: '#FF8A16',
};

const styles = {
  boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)',
  borderGray: ' 1px solid #d2d2d2',
};

export interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string };
  styles: { [key in keyof typeof styles]: string };
}

export const theme: StyleClosetTheme = {
  colors,
  styles,
};
