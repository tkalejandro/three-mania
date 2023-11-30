import React, { useRef, useState } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Center, Text, useTexture } from '@react-three/drei';
import { useControls } from 'leva';
import { audioLibrary, textureLibrary } from '@/helpers';
import { MovingFace } from './components';
import { ChakraHtml } from '../../components';

interface AboutSceneProps {
  position: Vector3;
}

const AboutScene = ({ position }: AboutSceneProps) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<THREE.Mesh>(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (meshRef.current) {
      // Check if meshRef.current is defined
      meshRef.current.rotation.x += delta;
    }
  });

  const dummyTexture = useTexture(textureLibrary.pavingStones());

  const hitSound = audioLibrary.hit();
  const dummyAudio = () => {
    hitSound.currentTime = 0;
    hitSound.volume = 1;
    hitSound.play();
  };

  return (
    <Center>
      <group position={position}>
        <MovingFace />
        <ChakraHtml>
          <p>Hello</p>
        </ChakraHtml>
      </group>
    </Center>
  );
};

export default AboutScene;
