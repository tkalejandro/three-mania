import { GroupProps, Vector3 } from '@react-three/fiber';
import React, { ReactNode } from 'react';

interface InvisibleMeshProps extends GroupProps {
  children: ReactNode;
  invisibleSize: [number, number, number];
  invisiblePosition: Vector3;
  debugger?: boolean;
}

/**
 * Useful for models with irregular shapes to trigger correct mouse events
 * @param invisibleSize Size of the invisible mesh
 * @param invisiblePosition Position of the invisible mesh
 * @param debugger Enable debugger mode
 * @returns JSX element representing the invisible mesh
 */
const InvisibleMesh = ({
  children,
  invisibleSize,
  invisiblePosition,
  debugger: enableDebugger = false,
  ...props
}: InvisibleMeshProps) => {
  return (
    <group {...props}>
      {children}
      <mesh position={invisiblePosition}>
        <boxGeometry args={invisibleSize} />
        <meshBasicMaterial transparent opacity={enableDebugger ? 0.75 : 0} />
      </mesh>
    </group>
  );
};

export default InvisibleMesh;
