import { useProgress } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';

import { useAppTheme } from '@/hooks';
import { Box, Text } from '@chakra-ui/layout';
/**
 * First Thing to appear :-)
 * This might dissapear in the future.
 * @returns
 */
const LoaderScene = () => {
  const { progress } = useProgress();
  const theme = useAppTheme();

  //Trick to ignore info of first render
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    return () => {
      //It will tell the application that all files have been loaded
      //Happens once
      console.log('complete');
    };
  }, []);
  console.log(progress);
  return (
    <Box>
      <Text color={theme.colors.white}>{progress.toFixed(0)} % loaded</Text>
    </Box>
  );
};

export default LoaderScene;
