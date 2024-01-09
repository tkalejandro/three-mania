import { useAppTheme } from '@/hooks';
import { ChakraHtml } from '@/modules/Experience/components';
import { useAppSettings } from '@/store';
import { Button, Box } from '@chakra-ui/react';
import { Center, Sparkles } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Text } from '@chakra-ui/layout';
import React, { useEffect, useRef, useState } from 'react';

const Navigation = () => {
  const theme = useAppTheme();

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
      navigationRef.current.style.opacity = newOpacity.toString();

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
    <ChakraHtml ref={navigationRef} position={[-0.36, 0.7, 0]}>
      <Box minH="300px" height="30vh" border="1px solid" width={'80vw'}>
        <Text fontSize="2xl" fontWeight="bold" color={theme.colors.primary.main}>
          Welcome to my musical journey! 🎵
        </Text>

        <Text fontSize="xl">
          Take your time and scroll down to immerse yourself in the sounds and experience a unique
          atmosphere.
        </Text>

        <Text fontSize="xl" color={theme.colors.secondary.main}>
          This is just a taste of what I can do.
        </Text>
      </Box>
    </ChakraHtml>
  );
};

export default Navigation;
