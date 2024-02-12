import { Float } from '@react-three/drei';
import { GroupProps, MeshProps, useFrame, Vector3 } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Group } from 'three';
interface AudioCoverProps extends GroupProps {
  // Something goes here
  color: string;
}

/**
 * Generates a standard cover of an Audio
 * Please use this and extend the properties if needed.
 * This is to keep the standard
 */
const AudioCover = ({ color, ...props }: AudioCoverProps) => {
  const meshRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // Get current position of the mesh
      const { x, z } = meshRef.current.position;

      // Calculate the rotation angle based on position
      const rotationY = Math.atan2(z, x) + -Math.PI / 2;

      // Update the rotation of the mesh
      meshRef.current.rotation.y = rotationY;

      // Calculate the distance from the center
      const distanceFromCenter = Math.sqrt(x ** 2 + z ** 2);

      // Define the target scale factor based on the distance from the center
      const targetScaleFactor = distanceFromCenter < 1.2 ? 1 : 0.75;

      // Smoothly interpolate the current scale towards the target scale
      const lerpedScale = meshRef.current.scale
        .clone()
        .lerp(new THREE.Vector3(targetScaleFactor, targetScaleFactor, targetScaleFactor), 0.1);

      // Update the scale of the mesh
      meshRef.current.scale.copy(lerpedScale);
    }
  });
  return (
    <group {...props} ref={meshRef}>
      <Float floatingRange={[-0.1, 0.1]} rotationIntensity={0.05}>
        <mesh>
          <planeGeometry args={[0.9, 1.6]} />
          <meshStandardMaterial color={color} side={THREE.FrontSide} />
        </mesh>
        <mesh>
          <planeGeometry args={[0.9, 1.6]} />
          <meshStandardMaterial color={'black'} side={THREE.BackSide} />
        </mesh>
      </Float>
    </group>
  );
};

export default AudioCover;
