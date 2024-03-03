import { fontLibrary } from '@/helpers';
import { useAppTheme } from '@/hooks';
import { Float, RoundedBox, Text, Text3D } from '@react-three/drei';
import { GroupProps, useFrame } from '@react-three/fiber';

import React, { useRef } from 'react';
import * as THREE from 'three';
import { Group } from 'three';
interface AudioCoverProps extends GroupProps {
  // Something goes here
  color: string;
  name: string;
  description: string;
}

/**
 * Generates a standard cover of an Audio
 * Please use this and extend the properties if needed.
 * This is to keep the standard
 */
const AudioCover = ({ color, description, name, ...props }: AudioCoverProps) => {
  const meshRef = useRef<Group>(null);
  const theme = useAppTheme();
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
        <group position={[0, 0, 0.0201]}>
          <mesh position={[0, 0.15, 0]}>
            {/* HERE GOES IMAGE / SHADER  */}
            <planeGeometry args={[0.8, 1.2]} />
            <meshStandardMaterial color={theme.colors.primary[100]} />
          </mesh>
          <group position={[0, -0.6, 0]}>
            <mesh>
              <planeGeometry args={[0.8, 0.3]} />
              <meshStandardMaterial color={theme.colors.primary[900]} />
            </mesh>

            <Text3D
              scale={0.03}
              font={fontLibrary._3DTextMontserrat.bold}
              position={[-0.29, 0.05, 0.001]}
            >
              {name}
              <meshNormalMaterial />
            </Text3D>

            <Text position={[0, -0.05, 0.001]} maxWidth={0.75} textAlign="center" fontSize={0.045}>
              {description}
            </Text>
          </group>
        </group>

        <RoundedBox
          radius={0.05}
          smoothness={2}
          bevelSegments={4}
          creaseAngle={0.4}
          scale={[1, 1, 0.4]}
          args={[0.9, 1.6, 0.1]} // Width, height, depth
        >
          <meshStandardMaterial color={color} roughness={0.15} />
        </RoundedBox>
      </Float>
    </group>
  );
};

export default AudioCover;
