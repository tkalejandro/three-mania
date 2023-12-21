import React, { useRef, useState } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { AudioCover } from './components';
import { useAppTheme } from '@/hooks';

interface AudioLibrarySceneProps {
  position: Vector3;
}

const AudioLibraryScene = ({ position }: AudioLibrarySceneProps) => {
  const theme = useAppTheme();
  return (
    <group position={position}>
      <AudioCover position={[-0.5, 0, 0]} color={theme.colors.secondary[500]} />
      <AudioCover position={[0, 0, 0]} color={theme.colors.primary[200]} />
      {/* <AudioCover position={[-1, 0, 0]} color={theme.colors.primary[200]} />
      <AudioCover position={[-1, 0, 0]} color={theme.colors.primary[200]} />
      <AudioCover position={[-1, 0, 0]} color={theme.colors.primary[200]} /> */}

      <Text position={[0, -1, 0]} scale={0.2}>
        Im Audio Library
      </Text>
    </group>
  );
};

export default AudioLibraryScene;
