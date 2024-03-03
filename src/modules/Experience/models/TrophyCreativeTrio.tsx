import React, { useEffect, useMemo, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group, Object3DEventMap } from 'three';
import { EnhancedGroup, FakeGlowMaterial, InvisibleMesh } from '../components';
import { GroupProps } from '@react-three/fiber';

interface ModelProps extends GroupProps {
  glow?: boolean;
  glowOnHover?: boolean;
}

/**
 * Trophy Model.
 * Requires light.
/* Trophy by CreativeTrio (https://poly.pizza/m/fLy8KmmD1t)
 */
const TrophyCreativeTrio = ({ glow = false, glowOnHover = false, ...props }: ModelProps) => {
  const [gltfScene, setGltfScene] = useState<Group<Object3DEventMap> | null>(null);
  const { scene } = useGLTF('/models/trophyCreativeTrio.glb');
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
              invisibleSize={[0.17, 0.3, 0.15]}
              invisiblePosition={[0.09, 0.15, -0.075]}
            >
              <primitive object={gltfScene.clone()}>
                {(glow || glowHover) && (
                  <group>
                    <mesh position={[0.095, 0.22, -0.08]} scale={0.125}>
                      <sphereGeometry />
                      <FakeGlowMaterial glowInternalRadius={1} glowSharpness={-0.65} falloff={0} />
                    </mesh>
                    <mesh scale={0.065} position={[0.09, 0.07, -0.075]}>
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

export default TrophyCreativeTrio;

useGLTF.preload('/models/trophyCreativeTrio.glb');
