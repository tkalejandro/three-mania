import { Html, shaderMaterial, useProgress } from '@react-three/drei';
import React from 'react';
import { ChakraHtml } from '../../components';
import { Text, useTheme } from '@chakra-ui/react';
import { loaderFragmentShader, loaderVertexShader } from '../../shaders/loaderShader';
/**
 * First Thing to appear :-)
 * This might dissapear in the future.
 * @returns
 */
const LoaderScene = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();
  const theme = useTheme();

  return (
    <>
      <ChakraHtml center>
        <Text>{progress.toFixed(0)} % loaded</Text>
      </ChakraHtml>
      <mesh scale={20}>
        <planeGeometry />
        <shaderMaterial
          vertexShader={loaderVertexShader}
          fragmentShader={loaderFragmentShader}
          uniforms={{
            uFull: { value: 0.0 },
          }}
        />
      </mesh>
    </>
  );
};

export default LoaderScene;
