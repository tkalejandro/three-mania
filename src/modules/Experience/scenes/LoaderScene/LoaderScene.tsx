import { Html, shaderMaterial, useProgress } from '@react-three/drei';
import React from 'react';
import { ChakraHtml } from '../../components';
import { Text, useTheme } from '@chakra-ui/react';
import { loaderFragmentShader, loaderVertexShader } from '../../shaders/loaderShader';
import { useColorManagement } from '@/store';
/**
 * First Thing to appear :-)
 * This might dissapear in the future.
 * @returns
 */
const LoaderScene = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const theme = useTheme();
  const { loadingBackgroundColor } = useColorManagement()

  return (
    <>
      <ChakraHtml center>
        <Text color={theme.colors.white}>{progress.toFixed(0)} % loaded</Text>
      </ChakraHtml>
      <mesh scale={20}>
        <planeGeometry />
        <meshBasicMaterial color={loadingBackgroundColor} />
      </mesh>
    </>
  );
};

export default LoaderScene;
