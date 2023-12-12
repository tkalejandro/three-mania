import React, { useRef, useState } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useControls } from 'leva';

const SecondStand = () => {
  // This reference will give us direct access to the mesh
  const trophyStand = useRef<THREE.Mesh>(null);

  const standControls = useControls('Trophy Second Stand', {
    standRotation: { value: [-0.1, -0.4, 0], step: 0.05 },
    standPosition: { value: [0.34, -1, 0], step: 0.05 },
  });
  return (
    <group>
      <mesh
        ref={trophyStand}
        position={standControls.standPosition}
        rotation={standControls.standRotation}
      >
        <boxGeometry args={[2.5, 0.2, 1]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  );
};

export default SecondStand;
