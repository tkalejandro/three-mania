import React, { useRef, useState } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Text, useTexture } from '@react-three/drei';
import { useControls } from 'leva';
import { audioLibrary, textureLibrary } from '@/helpers';

interface AboutProps {
  position: Vector3;
}

const About = ({ position }: AboutProps) => {
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
    <group position={position}>
      <mesh
        ref={meshRef}
        scale={active ? 1.5 : 1}
        onClick={dummyAudio}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial {...dummyTexture} color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
      <Text position={[0, -1, 0]} scale={0.2}>
        Im About
      </Text>
    </group>
  );
};

export default About;
