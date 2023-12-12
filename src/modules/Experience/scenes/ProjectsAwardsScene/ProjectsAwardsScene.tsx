import React, { useRef, useState } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { useControls } from 'leva';
import { FirstStand, SecondStand } from './components';

interface ProjectAwardsSceneProps {
  position: Vector3;
}

const ProjectsAwardsScene = ({ position }: ProjectAwardsSceneProps) => {
  // This reference will give us direct access to the mesh
  const trophyStand = useRef<THREE.Mesh>(null);

  const trophyControsl = useControls('Trophy Stand', {
    standRotation: { value: [-0.1, -0.4, 0], step: 0.05 },
  });
  return (
    <group position={position}>
      <FirstStand />
      <SecondStand />
      <Text position={[0, 0, 0]} scale={0.2}>
        Im Projects Awards
      </Text>
    </group>
  );
};

export default ProjectsAwardsScene;
