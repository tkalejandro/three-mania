import React, { useState, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group, Object3DEventMap } from 'three';
import { GroupProps } from '@react-three/fiber';
import { EnhancedGroup, FakeGlowMaterial, InvisibleMesh } from '../components';

interface ModelProps extends GroupProps {
  glow?: boolean;
  glowOnHover?: boolean;
}
/**
 * Trophy Model.
 * Requires light.
 * Trophy by Casey Tumbers
 * [CC-BY] (https://creativecommons.org/licenses/by/3.0/)
 * via Poly Pizza (https://poly.pizza/m/6Xu7mttjodo)
 */
const TrophyCasey = ({ glow, glowOnHover = false, ...props }: ModelProps) => {
  const [gltfScene, setGltfScene] = useState<Group<Object3DEventMap> | null>(null);
  const { scene } = useGLTF('/models/trophyCasey.glb');
  const [glowHover, setGlowHover] = useState<boolean>();
  useEffect(() => {
    setGltfScene(scene);

    return () => {
      // Clean up if necessary
    };
  }, []);

  // Memoize the component based on both props and the loaded model
  const cachedModel = useMemo(() => {
    if (gltfScene) {
      return (
        <EnhancedGroup>
          <group {...props}>
            <InvisibleMesh
              onPointerEnter={glowOnHover ? () => setGlowHover(true) : undefined}
              onPointerLeave={glowOnHover ? () => setGlowHover(false) : undefined}
              invisibleSize={[0.3, 0.55, 0.3]}
              invisiblePosition={[0, 0, 0]}
            >
              <primitive object={gltfScene.clone()}>
                {(glow || glowHover) && (
                  <group>
                    <mesh position={[0.015, 0.12, 0.0]} scale={0.2}>
                      <sphereGeometry />
                      <FakeGlowMaterial glowInternalRadius={1} glowSharpness={-0.65} falloff={0} />
                    </mesh>
                    <mesh scale={0.135} position={[0.0, -0.2, 0]}>
                      <sphereGeometry />
                      <FakeGlowMaterial glowInternalRadius={1} glowSharpness={-0.8} falloff={1} />
                    </mesh>
                  </group>
                )}
              </primitive>
            </InvisibleMesh>
          </group>
        </EnhancedGroup>
      );
    } else {
      return null; // Handle the case where the model hasn't loaded yet
    }
  }, [props, gltfScene]);

  return cachedModel;
};

export default TrophyCasey;

// Optionally preload the model
useGLTF.preload('/models/trophyCasey.glb');
