import { Html, useProgress } from '@react-three/drei';
import React from 'react';
import { ChakraHtml } from '../../components';
import { Text, useTheme } from '@chakra-ui/react';
/**
 * First Thing to appear :-)
 * This might dissapear in the future.
 * @returns
 */
const LoaderScene = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const theme = useTheme();
  return (
    <ChakraHtml center>
      <Text color={theme.colors.white}>{progress.toFixed(0)} % loaded</Text>
    </ChakraHtml>
  );
};

export default LoaderScene;
