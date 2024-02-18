import { fontLibrary } from '@/helpers';
import { useAppBreakpoints, useAppTheme } from '@/hooks';
import { useAppSettings } from '@/store';
import { Text, useAspect } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { Flex, Box } from '@react-three/flex';
import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated, config } from '@react-spring/three';

const Message = () => {
  const theme = useAppTheme();
  const { isDesktop } = useAppBreakpoints();
  const { size } = useThree();
  const [vw, vh] = useAspect(size.width, size.height);
  const [opacity, setOpacity] = useState<number>(0);
  const experienceLoaded = useAppSettings((state) => state.experienceLoaded);
  const setExperienceLoaded = useAppSettings((state) => state.setExperienceLoaded);

  useEffect(() => {
    setExperienceLoaded(true);
  }, []);

  useSpring({
    config: config.gentle,
    onChange: (props) => setOpacity(props.value.opacity),
    opacity: experienceLoaded ? 1 : 0,
  });

  const textScale = isDesktop ? 2 : 1;

  /**
   * Creates effect to work as opacity.
   */
  const opacityText = (text: string, font: string, scale: number, color: string) => {
    return (
      <Text font={font} scale={scale} color={color}>
        {text}

        <animated.meshPhongMaterial transparent opacity={opacity} />
      </Text>
    );
  };

  return (
    <group>
      <Flex
        centerAnchor
        flexDirection="column"
        justify={'center'}
        align={'flex-start'}
        size={[vw, vh, 1]}
        scale={0.95}
        marginLeft={isDesktop ? 1 : 0}
      >
        <Box centerAnchor marginBottom={0.05}>
          {opacityText(
            'Hello there!',
            fontLibrary.montserrat.regular,
            0.17 * textScale,
            theme.colors.primary.main,
          )}
        </Box>
        <Box centerAnchor marginBottom={0.075}>
          {opacityText(
            'Welcome to my musical world!',
            fontLibrary.montserrat.bold,
            0.105 * textScale,
            theme.colors.secondary[900],
          )}
        </Box>
        <Box centerAnchor marginBottom={0.075}>
          {opacityText(
            'Scroll down and Feel the cool tunes I made for you.',
            fontLibrary.montserrat.light,
            0.1 * textScale,
            theme.colors.primary.main,
          )}
        </Box>
        <Box centerAnchor marginBottom={0.075}>
          {opacityText(
            'Enjoy the journey,',
            fontLibrary.montserrat.light,
            0.1 * textScale,
            theme.colors.primary.main,
          )}
        </Box>
        <Box centerAnchor marginTop={0.075}>
          {opacityText(
            'Sonia',
            fontLibrary.montserrat.medium,
            0.1 * textScale,
            theme.colors.primary.main,
          )}
        </Box>
      </Flex>
    </group>
  );
};

export default Message;
