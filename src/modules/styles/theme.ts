const colors = {
  transparent: 'rgba(0, 0, 0, 0)',
  footerTransparent: 'rgba(0, 0, 0, 0.65)',
  darkTransparent: 'rgba(0, 0, 0, 0.75)',
  placeholderTransparent: 'rgba(255, 255, 255, 0.35)',
  spaceBlack: '#101010',
  whiteTransparent: 'rgba(255, 255, 255, 0.5)',
  navy: '#1B1B37',
  softNavy: '#6D6892',
  darkNavy: '#07053E',
  lightNavy: '#0A0752',
  navyBlue: 'rgba(0, 0, 52, 0.85)',
  ceruleanBlue: '#102e83',
  blue: '#2179ee',
  lightBlue: '#56ccf2',
  darkBlue: '#5ddaf4',
  carolinaBlue: '#51A0D5',
  mayaBlue: '#78C5EF',
  spaceBlue: '#5980C0',
  periwinkle: '#D4D3E9',
  teal: '#00FFD1',
  green: '#28D24E',
  lightGreen: '#1EF50B',
  crimson: '#DC143C',
  red: '#D22828',
  darkRed: '#FF2214',
  lightRed: '#ED0257',
  coral: '#ff6759',
  pink: '#FF17E8',
  gold: '#DCCB8C',
  lightGold: '#F3E9C5',
  yellow: '#FFC700',
  lightOrange: '#FCAF19',
  purple: '#7537ef',
  lightPurple: '#56408B',
  darkPurple: 'rgba(10, 7, 82, 0.75)',
  titlePurple: '#6E66A0;',
  softPurple: '#9795C5',
  borderPurple: 'rgba(255, 255, 255, 0.25)',
  white: '#ffffff',
  black: '#000000',
  grey: '#333333',
  lightGrey: 'rgba(255, 255, 255, 0.1)',
  darkGrey: 'rgba(255, 255, 255, 0.1)',
  softGrey: '#1D1B4D',
  slaty: '#797992',
  lightSlaty: '#E5E5E5',
  lavender: '#e5e5f8',
  lightLavender: '#B8B7C0',
  rat: '#cecddc',
};

const secondaryColors = {
  darkTransparent: 'rgba(0, 0, 0, 0.7)',
  darkTransparent10: 'rgba(0, 0, 0, 0.92)',
  halfBlack: 'rgba(0, 0, 0, 0.5)',
  pointBlack1: 'rgba(0, 0, 0, 0.1)',
  pointBlack4: 'rgba(0, 0, 0, 0.4)',
  lightGreyTransparent: 'rgba(255, 255, 255, 0.2)',
  lightGrey10: 'rgba(255, 255, 255, 0.3)',
  lightGrey20: '#121212',
  lightGrey30: '#191919',
  lightGrey40: 'rgba(18, 18, 18, 0.75)',
  lightGrey50: 'rgba(18, 18, 18, 0.94)',
  grey10: '#f3f4f8',
  grey20: '#e1e5eb',
  grey30: '#c2c6cc',
  grey40: '#9ea2a8',
  grey50: '#686c73',
  grey60: '#30363d',
  blue10: '#ade7ff',
  blue20: '#61bcff',
  blue30: '#2179ee',
  blue40: '#1f4ab4',
  blue50: '#1d2064',
  green10: '#b5ffcb',
  green20: '#5dffa3',
  green30: '#00cc9a',
  green40: '#219a8a',
  green50: '#183f51',
  purple10: '#dec7ff',
  purple20: '#a673ff',
  purple30: '#7537ef',
  purple40: '#4e23b6',
  purple50: '#2d1b64',
  coral10: '#ffc6b3',
  coral20: '#ff8e75',
  coral30: '#ff6759',
  coral40: '#eb312a',
  coral50: '#7b1e30',
  gold10: '#ffedc2',
  gold20: '#ffda8b',
  gold30: '#f0b95b',
  gold40: '#e5a229',
  gold50: '#6a4a24',
};

const breakpoints = ['31.25em', '43.75em', '46.875em'];
const fontSizes = [
  '1.2rem',
  '1.4rem',
  '1.6rem',
  '1.8rem',
  '2.4rem',
  '2.8rem',
  '3.2rem',
  '4.0rem',
  '4.8rem',
  '6.4rem',
];
const space = [
  '0',
  '.4rem',
  '.8rem',
  '1.2rem',
  '1.6rem',
  '2.0rem',
  '3.2rem',
  '4.8rem',
  '6.4rem',
  '9.6rem',
];

const modalWidth = '480px';
const modalHeight = '330px';
const modalWidthMobile = '354px';

export interface StyleClosetTheme {
  breakpoints: string[];
  fontSizes: string[];
  space: string[];
  colors: { [key in keyof typeof colors]: string };
  secondaryColors: { [key in keyof typeof secondaryColors]: string };
  modalWidth: string;
  modalHeight: string;
  modalWidthMobile: string;
}

export const theme: StyleClosetTheme = {
  breakpoints,
  fontSizes,
  space,
  colors,
  secondaryColors,
  modalWidth,
  modalHeight,
  modalWidthMobile,
};
