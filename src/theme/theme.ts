import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

/**
 * TO extend the Theme is very simple.
 * Console.log useTheme() for more info.
 */
const theme = extendTheme(
  {
    colors: {
      black: '#1C1C1C', // A dark, elegant black
      white: '#F5F5F5', // A slightly off-white for elegance
      primary: {
        50: '#e6f2ff',
        100: '#b3d9ff',
        200: '#80c2ff',
        300: '#4da6ff',
        400: '#1a8cff',
        500: '#0056b3', // Dark and elegant blue shade
        600: '#004080',
        700: '#003366',
        800: '#002633',
        900: '#001a40',
        main: '#0056b3',
      },
      secondary: {
        50: '#f2f2f2', // Light gray for light backgrounds
        100: '#e6e6e6',
        200: '#cccccc',
        300: '#b3b3b3',
        400: '#999999',
        500: '#6C757D', // Your dark gray for dark backgrounds
        600: '#595e66',
        700: '#474d55',
        800: '#353b44',
        900: '#23282f',
        main: '#6C757D',
      },
      warning: {
        50: '#fff7e6',
        100: '#ffecbf',
        200: '#ffe099',
        300: '#ffd366',
        400: '#ffcc33',
        500: '#FFC107',
        600: '#e69900',
        700: '#cc8800',
        800: '#b37700',
        900: '#995c00',
        main: '#FFC107',
      },
      success: {
        50: '#e6f7e6',
        100: '#cceccc',
        200: '#b3e6b3',
        300: '#99d699',
        400: '#80c780',
        500: '#28A745',
        600: '#248f3b',
        700: '#1f7d32',
        800: '#1a6b29',
        900: '#14591f',
        main: '#28A745',
      },
      danger: {
        50: '#ffe6e6',
        100: '#ffcccc',
        200: '#ff9999',
        300: '#ff6666',
        400: '#ff3333',
        500: '#DC3545',
        600: '#c42f3e',
        700: '#ad2936',
        800: '#961f2f',
        900: '#7f1a29',
        main: '#DC3545',
      },
    },
  },
  withDefaultColorScheme({ colorScheme: 'primary' }),
);

export default theme;
