import { NextUIPluginConfig } from '@nextui-org/theme';
import { ThemeConfig } from 'tailwindcss/types/config';
import { useState } from 'react';
/**
 * This is a tailwind nextui config.
 * - https://nextui.org/docs/customization/customize-theme
 */
export const nextUIConfig: NextUIPluginConfig = {
  layout: {
    spacingUnit: 4, // in px
    disabledOpacity: 0.5, // this value is applied as opacity-[value] when the component is disabled
    dividerWeight: '1px', // h-divider the default height applied to the divider component
    fontSize: {
      tiny: '0.75rem', // text-tiny
      small: '0.875rem', // text-small
      medium: '1rem', // text-medium
      large: '1.125rem', // text-large
    },
    lineHeight: {
      tiny: '1rem', // text-tiny
      small: '1.25rem', // text-small
      medium: '1.5rem', // text-medium
      large: '1.75rem', // text-large
    },
    radius: {
      small: '8px', // rounded-small
      medium: '12px', // rounded-medium
      large: '14px', // rounded-large
    },
    borderWidth: {
      small: '1px', // border-small
      medium: '2px', // border-medium (default)
      large: '3px', // border-large
    },
  },
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

//Extend new CSS propertiess here.
export const tailwindConfig: Partial<ThemeConfig> = {
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
};

//** THIS IS JUST A HOOK */
const useTheme = () => {
  const [theme] = useState({
    ...nextUIConfig,
    ...tailwindConfig,
  });

  return theme;
};

export default useTheme;
