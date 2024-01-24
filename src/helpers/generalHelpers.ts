import { Dispatch, MutableRefObject, SetStateAction } from 'react';

/**
 * General Helpers for the Web App.
 * Could be browser, repeat , calculations, Date... etc.
 */
class GeneralHelpers {
  /**
   * Function to detect if user is using Safari.
   * @returns
   */
  isSafari() {
    const userAgent = navigator.userAgent.toLowerCase();
    return userAgent.includes('safari') && !userAgent.includes('chrome');
  }
}

const generalHelpers = new GeneralHelpers();

export default generalHelpers;
