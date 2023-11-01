import React, { useRef, useState } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Center, Html, Text, useGLTF } from '@react-three/drei';

interface WelcomeProps {
  position: Vector3;
}

const Welcome = ({ position }: WelcomeProps) => {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<THREE.Mesh>(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState<boolean>(false);
  const [active, setActive] = useState<boolean>(false);

  // Import the guitar
  const guitar = useGLTF<string>(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/guitar/model.gltf',
  );

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    // if (meshRef.current) { // Check if meshRef.current is defined
    //   meshRef.current.rotation.x += delta
    // }
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <group position={position}>
      <Center>
        <primitive object={guitar.scene} position={[0.1, 0, 0]} />
        <Html occlude wrapperClass="play-button" position={[0, -0.75, 0]} scale={0}>
          Play
        </Html>
      </Center>
    </group>
  );
};

export default Welcome;
