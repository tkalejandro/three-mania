import { fontLibrary } from '@/helpers';
import { useAppBreakpoints, useAppTheme } from '@/hooks';
import { useAppSettings } from '@/store';
import { Text, useAspect } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Flex, Box } from '@react-three/flex';
import React, { useEffect, useRef, useState } from 'react';

const Navigation = () => {
  const theme = useAppTheme();
  const { isDesktop } = useAppBreakpoints();
  const { size } = useThree();
  const [vw, vh] = useAspect(size.width, size.height);

  const [opacity, setOpacity] = useState<number>(0);
  const navigationLoaded = useAppSettings((state) => state.navigationLoaded);
  const setNavigationLoaded = useAppSettings((state) => state.setNavigationLoaded);

  useFrame((state, delta) => {
    if (opacity >= 0.99) {
      // Finish!;
      return;
    }

    const targetOpacity = 1; // Target opacity value
    const speed = 1.5; // Adjust the speed of the transition

    setOpacity((prevOpacity) => {
      const newOpacity = prevOpacity + (targetOpacity - prevOpacity) * delta * speed;

      return newOpacity;
    });
  });

  useEffect(() => {
    if (!navigationLoaded) {
      setTimeout(() => {
        setNavigationLoaded(true);
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
          </Text>
        </Box>
        <Box centerAnchor marginBottom={0.075}>
          <Text
            font={fontLibrary.montserrat.bold}
            scale={0.105 * textScale}
            color={theme.colors.secondary[900]}
          >
            Welcome to my musical world!
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
          </Text>
        </Box>
        <Box centerAnchor marginBottom={0.075}>
          <Text
            font={fontLibrary.montserrat.light}
            scale={0.1 * textScale}
            color={theme.colors.primary.main}
          >
            Enjoy the journey,
          </Text>
        </Box>
        <Box centerAnchor marginTop={0.075}>
          <Text
            font={fontLibrary.montserrat.medium}
            scale={0.1 * textScale}
            color={theme.colors.primary.main}
          >
            Sonia
          </Text>
        </Box>
      </Flex>
    </group>
  );
};

export default Navigation;
