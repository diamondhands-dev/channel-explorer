const colors = {
  bg: '#E3DDEB',
  logo: 'linear-gradient(270deg, #9a4aff 0%, #f79413 97.48%)',
  tagNode: 'linear-gradient(270deg, #D36BF8 3.68%, #965BF4 100%)',
  black: '#000000',
  white: '#ffffff',
  gray: '#ECECEC',
};

const styles = {
  boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)',
};

export interface StyleClosetTheme {
  colors: { [key in keyof typeof colors]: string };
  styles: { [key in keyof typeof styles]: string };
}

export const theme: StyleClosetTheme = {
  colors,
  styles,
};
