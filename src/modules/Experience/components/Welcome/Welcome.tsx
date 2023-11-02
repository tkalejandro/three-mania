import React, { Suspense, useRef, useState } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Center, Html, Text, useGLTF } from '@react-three/drei';
import { useModels } from '@/store';

interface WelcomeProps {
  position: Vector3;
}

const Welcome = ({ position }: WelcomeProps) => {
  const guitar = useModels((state) => state.models?.guitar);
  return (
    <group position={position}>
      <Center>
        <Html occlude wrapperClass="play-button" position={[0, -0.75, 0]} scale={0}>
          Play
        </Html>
        {guitar && <primitive object={guitar.scene} />}
      </Center>
    </group>
  );
};

export default Welcome;
