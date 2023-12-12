import React, { useRef, useState } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useControls } from 'leva';

const SecondStand = () => {
  // This reference will give us direct access to the mesh
  const trophyStand = useRef<THREE.Mesh>(null);

  const standControls = useControls('Trophy Second Stand', {
    standRotation: { value: [-0.1, -0.4, 0], step: 0.05 },
    standPosition: { value: [0.0, -1, 0], step: 0.05 },
  });
  return (
    <group>
      <mesh
        ref={trophyStand}
        position={standControls.standPosition}
        rotation={standControls.standRotation}
      >
        <boxGeometry args={[1.6, 0.1, 0.7]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  );
};

export default SecondStand;
