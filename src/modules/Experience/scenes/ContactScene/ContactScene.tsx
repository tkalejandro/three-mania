import React, { useRef, useState } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Center, Float, Text, Text3D } from '@react-three/drei';
import { soniaCoronado } from '@/constants';
import { fontLibrary } from '@/helpers';
import { IphoneX } from '../../models';
import { useControls } from 'leva';
import { useAppBreakpoints } from '@/hooks';

interface ContactSceneProps {
  position: Vector3;
}

/**
 * Shows the contact information
 * Refer this link for some help:
 * https://codesandbox.io/p/sandbox/text3d-alignment-x6obrb?file=%2Fsrc%2FApp.js
 * https://gero3.github.io/facetype.js/
 * https://threejs.org/docs/index.html?q=textg#examples/en/geometries/TextGeometry
 *
 */
const ContactScene = ({ position }: ContactSceneProps) => {
  const { email, phone } = soniaCoronado;

  const { isTablet, isBigTablet } = useAppBreakpoints();

  let scale = 1;
  if (isBigTablet) {
    scale = 1.5;
  } else if (isTablet) {
    scale = 1.2;
  }

  const iPhone = useControls('iPhone', {
    position: { value: [0, -1, -0.6], step: 0.05 },
    rotation: { value: [0, 0, 0], step: 0.05 },
    scale: { value: 0.65, step: 0.05 },
  });
  return (
    <group position={position} scale={scale}>
      <Float rotationIntensity={1.5}>
        <group position={iPhone.position} rotation={iPhone.rotation} scale={iPhone.scale}>
          <IphoneX />
        </group>
      </Float>
      <Text
        font={fontLibrary.montserrat.semiBold}
        fontSize={0.1}
        position={[0, 0, 0]}
        rotation-y={0}
        maxWidth={2.5}
      >
        {email}
        <meshNormalMaterial />
      </Text>
      <Text
        font={fontLibrary.montserrat.semiBold}
        fontSize={0.1}
        position={[0, -0.5, 0]}
        rotation-y={0}
        maxWidth={2.5}
      >
        {phone}
        <meshNormalMaterial />
      </Text>
    </group>
  );
};

export default ContactScene;
