import {
  Environment,
  Float,
  MeshPortalMaterial,
  useTexture,
  Image,
  FloatProps,
} from '@react-three/drei';
import { PlaneGeometryProps, Vector3 } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';

interface MovingFaceProps {
  src: string;
  scale: any;
  position: Vector3;
  imgIntensity?: any;
  floatProps?: FloatProps;
}

/**
 * It creates a Plane Geometry with a reverse mesh simulating movement.
 * IF you can make it better go for it.
 * At the moment only certain image size made the trick. Choose wisely.
 * Avoid this component when there is to much scrolling.
 * @returns
 */
const MovingImage = ({
  src,
  scale,
  position,
  imgIntensity = 1.05,
  ...floatProps
}: MovingFaceProps) => {
  return (
    <group position={position}>
      <mesh>
        <planeGeometry args={scale} />
        <MeshPortalMaterial>
          <Float rotationIntensity={0.05} floatingRange={[-0.05, 0.05]} {...floatProps}>
            <Image url={src} scale={[scale[0] * imgIntensity, scale[1] * imgIntensity]} />
          </Float>
        </MeshPortalMaterial>
      </mesh>
    </group>
  );
};

export default MovingImage;
