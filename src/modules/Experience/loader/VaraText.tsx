import { useAppTheme } from '@/hooks';
import React, { useEffect, useRef } from 'react';
import Vara from 'vara';
import json from './varaText.json';
const VaraText = () => {
  const theme = useAppTheme();
  //Trick to ignore info of first render
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    var vara = new Vara(
      '#vara-container',
      'https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json',
      [
        {
          text: 'Sonia Coronado',
          fontSize: 40,
          strokeWidth: 1,
          color: theme.colors.white,
          duration: 750,
          textAlign: 'center',
        },
      ],
    );
  }, []);

  return <div id="vara-container" className="z-[20]"></div>;
};

export default React.memo(VaraText);
