import { Html, shaderMaterial, useProgress } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import { ChakraHtml } from '../../components';
import { Text, useTheme } from '@chakra-ui/react';
  // @ts-ignore
  import loaderVertexShader from '../../shaders/LoaderShader/vertex.glsl';
  // @ts-ignore
  import loaderFragmentShader from '../../shaders/LoaderShader/fragment.glsl';
  import gsap from 'gsap';
import { extend } from '@react-three/fiber';
/**
 * First Thing to appear :-)
 * This might dissapear in the future.
 * @returns
 */
const LoaderScene = () => {
  const { active, progress, errors, item, loaded, total} = useProgress();
  const theme = useTheme();

  return (
    <>
      <ChakraHtml center>
        <Text>{progress.toFixed(0)} % loaded</Text>
      </ChakraHtml>
      <mesh scale={20} >
        <planeGeometry />
        <shaderMaterial
          vertexShader={loaderVertexShader}
          fragmentShader={loaderFragmentShader}
          uniforms={{
            uFull: { value: 0.0 }
          }}
        />
      </mesh>
    </>
  );
};

export default LoaderScene;
