import React, { useRef } from 'react';
import { Color } from '@react-three/fiber';
import { Mesh } from 'three';
import { useControls } from 'leva';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three'
import PointsLoader from '@/modules/Experience/components/PointsLoader/PointsLoader';

interface MovingFaceProps {
  scenePositionY: number;
  selectedColor: Color;
}

const MovingFace = ({ scenePositionY, selectedColor }: MovingFaceProps) => {
  const faceRef = useRef<Mesh | any>(null!);
  const {
    positionY,
  } = useControls('Face', {
    positionIntensityX: { value: 1.1, step: 0.001, min: 0, max: 2 },
    positionIntensityY: { value: 0.5, step: 0.001, min: 0, max: 2 },
    lookAtIntensity: { value: 2, step: 0.001, min: 0, max: 10 },
    positionY: { value: 4 },
    rotationIntensityX: { value: 0.25, step: 0.001, min: 0.001, max: 2 },
    rotationIntensityY: { value: 0.2, step: 0.001, min: 0.001, max: 2 },
  });

  const musicNoteMap = new THREE.TextureLoader().load('/textures/movingFace/note.png')
  /**
   * Model created by me and
   * inspired from this tutorial ↓
   * https://youtu.be/AlPPYkZg9D4?si=L_chsWglPCB2DAGk
   */
  const model = useGLTF('/models/head-3.glb')
  // Let's ignore the issue for now
  // @ts-ignore
  const modelGeometry = model.nodes["Head"].geometry.clone()

  return (
    <group ref={faceRef} position={[0, scenePositionY + positionY , -0.3]} >
      <PointsLoader model={modelGeometry} selectedColor={selectedColor} map={musicNoteMap} />
    </group>
  );
};

export default MovingFace;