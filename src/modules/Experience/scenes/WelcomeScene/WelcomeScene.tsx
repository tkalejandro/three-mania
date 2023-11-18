import React, { useState } from 'react';
import { Vector3 } from '@react-three/fiber';
import { Center, Html, Text, useGLTF } from '@react-three/drei';
import { GuitarModel } from '../../models';
import { Button } from '@nextui-org/button';
import { useCamera } from '@/store';

interface WelcomeSceneProps {
  position: Vector3;
}

const WelcomeScene = ({ position }: WelcomeSceneProps) => {
  const moveCameraCloser = useCamera((state) => state.moveCameraCloser);
  return (
    <Center position={position}>
      <GuitarModel scale={1.8} />
      {/* <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh> */}
      <boxGeometry />

      <Html center occlude position={[0, -1.6, 0]}>
        <Button onClick={moveCameraCloser}>Play</Button>
      </Html>
    </Center>
  );
};

export default WelcomeScene;
