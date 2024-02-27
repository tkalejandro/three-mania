import React, { useEffect, useRef, useState } from 'react';
import { extend, useFrame, useThree, Vector3 } from '@react-three/fiber';
import { mediaCardVertex, mediaCardFragment } from '../../../../shaders/mediaShader';
import * as THREE from 'three';
import { useTexture, Text, shaderMaterial, Text3D, useAspect } from '@react-three/drei';
import { Mesh } from 'three';
import { Box, Flex } from '@react-three/flex';
import { fontLibrary } from '@/helpers';
import { useAppTheme } from '@/hooks';

interface MediaProps {
  title: string;
  description: string;
  image: string;
}

const MediaCard = ({ title, image, description }: MediaProps) => {
  const [hovered, setHover] = useState<boolean>(false);
  const [fixedElapse, setFixedElpase] = useState<number>(0);
  const theme = useAppTheme();
  /**
   * TODO: Fix type issue.
   * - Using type Mesh alone throws
   * an error cuz uTime is type any
   * in line 39.
   */
  const ref = useRef<Mesh | any>(null);
  const time = useRef<number>(0);
  const { viewport, size } = useThree();
  const [vw, vh] = useAspect(size.width, size.height);
  const WaveMaterial = shaderMaterial(
    {
      uTime: 0,
      uTexture: useTexture(image),
      resolution: new THREE.Vector2(),
      pointer: new THREE.Vector2(0.5, 0.5),
    },
    mediaCardVertex,
    mediaCardFragment,
  );
  extend({ WaveMaterial });

  useFrame((state, delta) => {
    hovered
      ? (ref.current.material.uTime = state.clock.elapsedTime)
      : (ref.current.material.uTime = fixedElapse);
    time.current = state.clock.elapsedTime;
  });

  /**
   * We will save the last elapsed time durring
   * the animation and save it so the image stay
   * fixed when mouving the mouse out of mesh
   * instead of returning to it's initial shape
   */

  useEffect(() => {
    setFixedElpase(time.current);
  }, [hovered]);

  return (
    <Box
      centerAnchor
      dir="column"
      margin={0.1}
      scale={0.95}
      //size={[vw, vh, 1]}
      justify="flex-start"
      align="flex-start"
    >
      <Box marginBottom={0.05} centerAnchor>
        {/* position={[-0.68, 0.8, 0]} */}
        <Text
          position={[-0.859, 0, 0]}
          textAlign="left"
          maxWidth={20}
          scale={0.12}
          font={fontLibrary.montserrat.bold}
          color={theme.colors.grey}
        >
          {title}
        </Text>
      </Box>
      {/* position={[-0.63, 0.675, 0]} */}
      <Box centerAnchor>
        <Text
          position={[-0.859, 0, 0]}
          textAlign="left"
          maxWidth={20}
          scale={0.06}
          font={fontLibrary.montserrat.light}
          color={theme.colors.grey}
        >
          {description}
        </Text>
      </Box>
      <Box marginTop={0.75}>
        <mesh
          //position={[0, 0, 0]}
          ref={ref}
          onPointerEnter={(event) => setHover(true)}
          onPointerOut={(event) => setHover(false)}
        >
          <planeGeometry args={[1.8, 1.2, 1]} />
          {
            // TODO: Fix this.
            /* @ts-ignore */
            <waveMaterial
              key={WaveMaterial.key}
              resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
            />
          }
        </mesh>
      </Box>
    </Box>
  );
};

export default MediaCard;
