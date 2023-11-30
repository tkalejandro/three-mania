import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Mesh } from 'three';
import { useControls } from 'leva';

const MovingFace = () => {
  const faceRef = useRef<Mesh>(null!);

  const { positionIntensityX, positionIntensityY, lookAtIntensity } = useControls('Face', {
    positionIntensityX: { value: 1.1, step: 0.001, min: 0, max: 2 },
    positionIntensityY: { value: 0.5, step: 0.001, min: 0, max: 2 },
    lookAtIntensity: { value: 2, step: 0.001, min: 0, max: 10 },
    position: { value: [0, 1, 0] },
  });

  useFrame((state, delta) => {
    // Mouse coordinates from -1 to 1
    const mouse = state.pointer;

    const mouseX = mouse.x;
    const mouseY = mouse.y;

    // Update mesh position based on mouse position
    if (faceRef.current) {
      faceRef.current.position.x = mouseX * positionIntensityX;
      faceRef.current.position.y = 1 + mouseY * positionIntensityY;

      // Make the face look at the mouse
      faceRef.current.lookAt(mouseX * lookAtIntensity, mouseY * lookAtIntensity, Math.PI * 0.5);
    }
  });

  return (
    <mesh ref={faceRef} position={[0, 1, 0]}>
      <planeGeometry args={[2, 4]} />
      <meshStandardMaterial color={'pink'} />
    </mesh>
  );
};

export default MovingFace;
