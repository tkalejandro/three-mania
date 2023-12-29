/**
 * Library to render fonts quickly.
 */
class FontLibrary {
  /**
   * Montserrat variations - Useful in Text3D from Drei
   */
  _3DTextMontserrat = {
    bold: '/fonts/Montserrat_Bold.json',
    thinRegular: '/fonts/Montserrat_Thin_Regular.json',
  };

  /**
   * Montserrat variations - Useful in Text from drei
   */
  montserrat = {
    black: '/fonts/Montserrat-Black.ttf',
    blackItalic: '/fonts/Montserrat-BlackItalic.ttf',
    bold: '/fonts/Montserrat-Bold.ttf',
    boldItalic: '/fonts/Montserrat-BoldItalic.ttf',
    extraBold: '/fonts/Montserrat-ExtraBold.ttf',
    extraBoldItalic: '/fonts/Montserrat-ExtraBoldItalic.ttf',
    extraLight: '/fonts/Montserrat-ExtraLight.ttf',
    extraLightItalic: '/fonts/Montserrat-ExtraLightItalic.ttf',
    italic: '/fonts/Montserrat-Italic.ttf',
    light: '/fonts/Montserrat-Light.ttf',
    lightItalic: '/fonts/Montserrat-LightItalic.ttf',
    medium: '/fonts/Montserrat-Medium.ttf',
    mediumItalic: '/fonts/Montserrat-MediumItalic.ttf',
    regular: '/fonts/Montserrat-Regular.ttf',
    semiBold: '/fonts/Montserrat-SemiBold.ttf',
    semiBoldItalic: '/fonts/Montserrat-SemiBoldItalic.ttf',
    thin: '/fonts/Montserrat-Thin.ttf',
    thinItalic: '/fonts/Montserrat-ThinItalic.ttf',
  };

  /**
   * Montserrat Variable Font - Not sure if this is useful, should be tested
   */
  montserratVariableFont = {
    italic: '/fonts/Montserrat_Italic-VariableFont_wght.ttf',
    regular: '/fonts/Montserrat-VariableFont_wght.ttf',
  };
}

const fontLibrary = new FontLibrary();

export default fontLibrary;
