import { fontLibrary } from '@/helpers';
import { useAppBreakpoints, useAppTheme } from '@/hooks';
import { useAppSettings } from '@/store';
import { Text, useAspect } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Flex, Box } from '@react-three/flex';
import React, { useEffect, useRef, useState } from 'react';
import { MeshPhongMaterial } from 'three';

const Message = () => {
  const theme = useAppTheme();
  const { isDesktop } = useAppBreakpoints();
  const { size } = useThree();
  const [vw, vh] = useAspect(size.width, size.height);

  //TODO Can we make this better??
  const transparentRef1 = useRef<MeshPhongMaterial>(null!);
  const transparentRef2 = useRef<MeshPhongMaterial>(null!);
  const transparentRef3 = useRef<MeshPhongMaterial>(null!);
  const transparentRef4 = useRef<MeshPhongMaterial>(null!);
  const transparentRef5 = useRef<MeshPhongMaterial>(null!);

  const experienceLoaded = useAppSettings((state) => state.experienceLoaded);
  const setExperienceLoaded = useAppSettings((state) => state.setExperienceLoaded);

  useFrame((state, delta) => {
    if (experienceLoaded && transparentRef1.current.opacity < 1.1) {
      const speed = 0.1;
      transparentRef1.current.opacity += speed;
      transparentRef2.current.opacity += speed;
      transparentRef3.current.opacity += speed;
      transparentRef4.current.opacity += speed;
      transparentRef5.current.opacity += speed;
    }
  });

  useEffect(() => {
    if (!experienceLoaded) {
      setTimeout(() => {
        setExperienceLoaded(true);
      }, 250);
    }
  }, []);

  const textScale = isDesktop ? 2 : 1;
  return (
    <group>
      <Flex
        centerAnchor
        flexDirection="column"
        justify={'center'}
        align={'flex-start'}
        size={[vw, vh, 1]}
        scale={0.95}
        //TODO This is bugy when transforming from Desktop to Mobile. FIX ME.
        marginLeft={isDesktop ? 1 : 0}
      >
        <Box centerAnchor marginBottom={0.05}>
          <Text
            font={fontLibrary.montserrat.regular}
            scale={0.17 * textScale}
            color={theme.colors.primary.main}
          >
            Hello there!
            <meshPhongMaterial
              ref={transparentRef1}
              color={theme.colors.primary.main}
              opacity={0}
              transparent
            />
          </Text>
        </Box>
        <Box centerAnchor marginBottom={0.075}>
          <Text
            font={fontLibrary.montserrat.bold}
            scale={0.105 * textScale}
            color={theme.colors.secondary[900]}
          >
            Welcome to my musical world!
            <meshPhongMaterial
              ref={transparentRef2}
              color={theme.colors.secondary[900]}
              opacity={0.1}
              transparent
            />
          </Text>
        </Box>
        <Box centerAnchor marginBottom={0.075}>
          <Text
            maxWidth={18}
            font={fontLibrary.montserrat.light}
            scale={0.1 * textScale}
            color={theme.colors.primary.main}
          >
            Scroll down and Feel the cool tunes I made for you.
            <meshPhongMaterial
              ref={transparentRef3}
              color={theme.colors.primary.main}
              opacity={0.1}
              transparent
            />
          </Text>
        </Box>
        <Box centerAnchor marginBottom={0.075}>
          <Text
            font={fontLibrary.montserrat.light}
            scale={0.1 * textScale}
            color={theme.colors.primary.main}
          >
            Enjoy the journey,
            <meshPhongMaterial
              ref={transparentRef4}
              color={theme.colors.primary.main}
              opacity={0.1}
              transparent
            />
          </Text>
        </Box>
        <Box centerAnchor marginTop={0.075}>
          <Text
            font={fontLibrary.montserrat.medium}
            scale={0.1 * textScale}
            color={theme.colors.primary.main}
          >
            Sonia
            <meshPhongMaterial
              ref={transparentRef5}
              color={theme.colors.primary.main}
              opacity={0.1}
              transparent
            />
          </Text>
        </Box>
      </Flex>
    </group>
  );
};

export default Message;
