import { fontLibrary } from '@/helpers';
import { useAppBreakpoints, useAppTheme } from '@/hooks';
import { Text, useAspect } from '@react-three/drei';
import { useFrame, useThree, Vector3 } from '@react-three/fiber';
import { Flex, Box } from '@react-three/flex';
import React, { useRef } from 'react';
import { MeshPhongMaterial } from 'three';
import { ThreeDButton } from '../../components';
import { useSoundManagerContext } from '../../sounds/SoundManager/SoundManager';

interface AddMusicSceneProps {
  position: Vector3;
}

const AddMusicScene = ({ position }: AddMusicSceneProps) => {
  const theme = useAppTheme();
  const { isDesktop } = useAppBreakpoints();
  const { onFirstLayer } = useSoundManagerContext();
  const { size } = useThree();
  const [vw, vh] = useAspect(size.width, size.height);

  //TODO Can we make this better??
  const transparentRef1 = useRef<MeshPhongMaterial>(null!);
  const transparentRef2 = useRef<MeshPhongMaterial>(null!);

  useFrame((state, delta) => {
    if (transparentRef1.current.opacity < 1.1) {
      const speed = 0.1;
      transparentRef1.current.opacity += speed;
      transparentRef2.current.opacity += speed;
    }
  });

  const playButton = () => {
    onFirstLayer();
  };

  const textScale = isDesktop ? 2 : 1;
  return (
    <group position={position}>
      <Flex
        centerAnchor
        flexDirection="column"
        justify={'center'}
        align={'center'}
        size={[vw * 2, vh * 0.5, 1]}
        scale={0.95}
        //TODO This is bugy when transforming from Desktop to Mobile. FIX ME.
        marginLeft={isDesktop ? 1 : 0}
      >
        <Box centerAnchor marginBottom={0.35}>
          <Text
            textAlign="center"
            maxWidth={15}
            font={fontLibrary.montserrat.thin}
            scale={0.12 * textScale}
            color={theme.colors.primary.main}
          >
            Sense something missing in the melody?
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
            color={theme.colors.primary.main}
          >
            Lets add that touch!
            <meshPhongMaterial
              ref={transparentRef2}
              color={theme.colors.primary.main}
              opacity={0.1}
              transparent
            />
          </Text>
        </Box>
        <Box centerAnchor marginTop={0.2}>
          {/* //TODO MAKE THIS BUTTON NICER THIS ONE IS JUST CONCEPT */}
          <ThreeDButton text="Add Layer" color="success" size="lg" onClick={playButton} />
        </Box>
      </Flex>
    </group>
  );
};

export default AddMusicScene;
