import { soniaCoronado } from '@/constants';
import { fontLibrary } from '@/helpers';
import { useAppTheme } from '@/hooks';
import { ChakraHtml } from '@/modules/Experience/components';
import { useAppSettings } from '@/store';
import { Center, Sparkles, Text, useAspect } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { Flex, Box } from '@react-three/flex';
import React, { useEffect, useRef, useState } from 'react';

const Navigation = () => {
  const theme = useAppTheme();
  const { size } = useThree();
  const [vpWidth] = useAspect(size.width, size.height);

  const navigationRef = useRef<HTMLDivElement>(null!);
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
      //navigationRef.current.style.opacity = newOpacity.toString();

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
  return (
    <group>
      <Flex
        onReflow={(totalWidth, totalHeight) => console.log(totalWidth, totalHeight)}
        centerAnchor
        //flexDirection="column"
        //flexWrap="wrap"
        //justify="center"
        //justify="space-between"
        align="flex-start"
        size={[1.78, 1, 1]}
      >
        <Box centerAnchor marginBottom={0.05}>
          <Text
            font={fontLibrary.montserrat.regular}
            scale={0.17}
            color={theme.colors.primary.main}
          >
            Hello there!
          </Text>
        </Box>
        <Box centerAnchor marginBottom={0.075}>
          <Text
            font={fontLibrary.montserrat.bold}
            scale={0.105}
            color={theme.colors.secondary[900]}
          >
            Welcome to my musical world!
          </Text>
        </Box>
        <Box centerAnchor marginBottom={0.075}>
          <Text
            maxWidth={18}
            font={fontLibrary.montserrat.light}
            scale={0.1}
            color={theme.colors.primary.main}
          >
            Scroll down and Feel the cool tunes I made for you.
          </Text>
        </Box>
        <Box centerAnchor marginBottom={0.075}>
          <Text font={fontLibrary.montserrat.light} scale={0.1} color={theme.colors.primary.main}>
            Enjoy the journey,
          </Text>
        </Box>
        <Box centerAnchor marginTop={0.075}>
          <Text
            font={fontLibrary.montserrat.extraBoldItalic}
            scale={0.1}
            color={theme.colors.primary.main}
          >
            Sonia
          </Text>
        </Box>
      </Flex>
    </group>
  );
  // return (
  //   <ChakraHtml ref={navigationRef} position={[-0.36, 0.7, 0]}>
  //     <Box minH="300px" height="30vh" border="1px solid" width={'80vw'}>
  //       <Text fontSize="2xl" fontWeight="bold" color={theme.colors.primary.main}>
  //         Welcome to my musical journey! 🎵
  //       </Text>

  //       <Text fontSize="xl">
  //         Take your time and scroll down to immerse yourself in the sounds and experience a unique
  //         atmosphere.
  //       </Text>

  //       <Text fontSize="xl" color={theme.colors.secondary.main}>
  //         This is just a taste of what I can do.
  //       </Text>
  //     </Box>
  //   </ChakraHtml>
  // );
};

export default Navigation;
