import React, { useRef, useState } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Center, Text, Text3D } from '@react-three/drei';
import { soniaCoronado } from '@/constants';
import { fontLibrary } from '@/helpers';
import { IphoneX } from '../../models';

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
  return (
    <group position={position}>
      <IphoneX scale={0.6} />
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
