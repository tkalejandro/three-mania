import React from 'react';
import { useThree, Vector3 } from '@react-three/fiber';
import { MediaCard } from './components';
import { useAppBreakpoints } from '@/hooks';
import { Box, Flex } from '@react-three/flex';
import { useAspect } from '@react-three/drei';
interface MediaCoverageSceneProps {
  position: Vector3;
}

const MediaCoverageScene = ({ position }: MediaCoverageSceneProps) => {
  const { isTablet } = useAppBreakpoints();
  const { size } = useThree();
  const [vpWidth, vpHeight] = useAspect(size.width, size.height);

  return (
    <group position={position}>
      <Flex centerAnchor flexDirection="column" size={[vpWidth, vpHeight, 0]}>
        <Box
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
          width={'100%'}
        >
          <MediaCard title={'title 1'} image={'/images/theLastOfUS.jpg'} />
          <MediaCard title={'title 2'} image={'/images/theLastOfUS2.jpg'} />
          <MediaCard title={'title 3'} image={'/images/theLastOfUS2.jpg'} />
          <MediaCard title={'title 4'} image={'/images/theLastOfUS.jpg'} />
        </Box>
      </Flex>
    </group>
  );
};

export default MediaCoverageScene;
