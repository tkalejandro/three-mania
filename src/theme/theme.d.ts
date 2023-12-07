import { ChakraTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
// WORK IN PROGRESS
type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  main: string;
};

type Breakpoints = {
  base: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
};

export interface AppTheme extends ChakraTheme {
  colors: ChakraTheme['colors'] & {
    // Add custom color properties here
    background: string;
    black: string;
    white: string;
    primary: ColorScale;
    secondary: ColorScale;
    warning: ColorScale;
    success: ColorScale;
    danger: ColorScale;
    info: ColorScale;
  };
  breakpoints: Breakpoints;
}
