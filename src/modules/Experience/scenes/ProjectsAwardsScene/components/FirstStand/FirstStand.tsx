import React, { useRef, useState } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useControls } from 'leva';
import { TrophyCasey } from '@/modules/Experience/models';

const FirstStand = () => {
  // This reference will give us direct access to the mesh
  const trophyStand = useRef<THREE.Mesh>(null);

  const standControls = useControls('Trophy First Stand', {
    standRotation: { value: [-0.05, 0.4, 0], step: 0.05 },
    standPosition: { value: [0, 1, 0], step: 0.05 },
  });
  return (
    <group position={standControls.standPosition} rotation={standControls.standRotation}>
      <TrophyCasey position={[-0.56, 0.3, 0]} />
      <TrophyCasey position={[0.0, 0.3, 0]} />
      <TrophyCasey position={[0.56, 0.3, 0]} />
      <mesh ref={trophyStand}>
        <boxGeometry args={[1.6, 0.1, 0.7]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  );
};

export default FirstStand;
