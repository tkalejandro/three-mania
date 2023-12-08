import React, { useRef } from 'react';
import { Color, useFrame, useThree, Vector3 } from '@react-three/fiber';
import { Mesh } from 'three';
import { useControls } from 'leva';

interface MovingFaceProps {
  scenePositionY?: number;
  selectedColor: Color;
}

const MovingFace = ({ scenePositionY, selectedColor }: MovingFaceProps) => {
  const faceRef = useRef<Mesh>(null!);

  const { positionIntensityX, positionIntensityY, lookAtIntensity, positionY } = useControls(
    'Face',
    {
      positionIntensityX: { value: 1.1, step: 0.001, min: 0, max: 2 },
      positionIntensityY: { value: 0.5, step: 0.001, min: 0, max: 2 },
      lookAtIntensity: { value: 2, step: 0.001, min: 0, max: 10 },
      positionY: { value: 2 },
    },
  );

  useFrame((state, delta) => {
    // Mouse coordinates from -1 to 1
    const mouse = state.pointer;

    const mouseX = mouse.x;
    const mouseY = mouse.y;

    // Update mesh position based on mouse position
    if (faceRef.current) {
      faceRef.current.position.x = mouseX * positionIntensityX;
      // PositionY is to correct the position of the face.
      faceRef.current.position.y = positionY + mouseY * positionIntensityY;
      // Make the face look at the mouse
      faceRef.current.lookAt(mouseX * lookAtIntensity, mouseY * lookAtIntensity, Math.PI * 0.5);
    }
  });

  return (
    <mesh ref={faceRef} position={[0, positionY, 0]}>
      <planeGeometry args={[2, 4]} />
      <meshStandardMaterial color={selectedColor} />
    </mesh>
  );
};

export default MovingFace;
