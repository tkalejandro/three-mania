import { NextUIPluginConfig } from '@nextui-org/theme';

/**
 * This is a tailwind nextui config.
 * - https://nextui.org/docs/customization/customize-theme
 */
const theme: NextUIPluginConfig = {
  layout: undefined,
  defaultTheme: 'light',
  themes: {
    light: {
      colors: {
        primary: '#007BFF',
        secondary: '#6C757D',
        warning: '#FFC107',
        success: '#28A745',
        danger: '#DC3545',
      },
    },
    dark: {
      colors: {
        primary: '#007BFF',
        secondary: '#6C757D',
        warning: '#FFC107',
        success: '#28A745',
        danger: '#DC3545',
      },
    },
  },
};

export default theme;
