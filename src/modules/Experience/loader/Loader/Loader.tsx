import { Html, shaderMaterial, useProgress } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import { ChakraHtml } from '../../components';
import { Box, Text } from '@chakra-ui/react';

import { useAppTheme } from '@/hooks';
/**
 * First Thing to appear :-)
 * This might dissapear in the future.
 * @returns
 */
const Loader = () => {
  const y = useProgress();

  const { active, progress, errors, item, loaded, total } = useProgress();
  const theme = useAppTheme();
  console.log(progress, loaded, total, item, active);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    return () => {
      console.log('id ue');
    };
  }, []);

  return (
    <Box
      style={{
        border: '10px solid black',
        height: '100%',
      }}
    >
      <Text>{progress.toFixed(0)} % loaded</Text>
    </Box>
  );
};

export default React.memo(Loader);
