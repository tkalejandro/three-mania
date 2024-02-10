import React, { useEffect, useMemo, useState } from 'react';
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
 * This is a HUGE Model
 * Requires light.
 * Trophy by jeremy
 * [CC-BY] (https://creativecommons.org/licenses/by/3.0/)
 * via Poly Pizza (https://poly.pizza/m/cYUZdUqlNYd)
 */
const TrophyJeremy = ({ glow = false, glowOnHover = false, ...props }: ModelProps) => {
  const [gltfScene, setGltfScene] = useState<Group<Object3DEventMap> | null>(null);
  const { scene } = useGLTF('/models/trophyJeremy.glb');
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
              invisibleSize={[4.5, 14.5, 7.5]}
              invisiblePosition={[0, 7.25, 0]}
            >
              <primitive object={gltfScene.clone()}>
                {(glow || glowHover) && (
                  <group>
                    <mesh position={[0.095, 14, -0.08]} scale={2}>
                      <sphereGeometry />
                      <FakeGlowMaterial glowInternalRadius={1} glowSharpness={-0.65} falloff={0} />
                    </mesh>
                    <mesh position={[0.095, 10.1, -0.08]} scale={2.9}>
                      <sphereGeometry />
                      <FakeGlowMaterial
                        glowColor="red"
                        glowInternalRadius={1}
                        glowSharpness={-0.65}
                        falloff={0}
                      />
                    </mesh>
                    <mesh position={[0.095, 6.1, -0.08]} scale={2.9}>
                      <sphereGeometry />
                      <FakeGlowMaterial
                        glowColor="red"
                        glowInternalRadius={1}
                        glowSharpness={-0.65}
                        falloff={0}
                      />
                    </mesh>
                    {/* COLUMN LEFT */}
                    <mesh position={[0.095, 2.1, -1.75]} scale={1.9}>
                      <sphereGeometry />
                      <FakeGlowMaterial
                        glowColor="red"
                        glowInternalRadius={0.9}
                        glowSharpness={-0.65}
                        falloff={0}
                      />
                    </mesh>
                    {/* COLUMN RIGHT */}
                    <mesh position={[0.095, 2.1, 1.75]} scale={1.9}>
                      <sphereGeometry />
                      <FakeGlowMaterial
                        glowColor="red"
                        glowInternalRadius={0.9}
                        glowSharpness={-0.65}
                        falloff={0}
                      />
                    </mesh>
                    {/* RIGHT SIDE GOLD */}
                    <mesh position={[0.095, 4.1, -1.75]} scale={1.5}>
                      <sphereGeometry />
                      <FakeGlowMaterial
                        glowInternalRadius={0.9}
                        glowSharpness={-0.65}
                        falloff={1.5}
                      />
                    </mesh>
                    {/* CENTER GOLD */}
                    <mesh position={[0.095, 4.1, 0]} scale={1.5}>
                      <sphereGeometry />
                      <FakeGlowMaterial
                        glowInternalRadius={0.9}
                        glowSharpness={-0.65}
                        falloff={1.5}
                      />
                    </mesh>
                    {/* LEFT SIDE GOLD */}
                    <mesh position={[0.095, 4.1, 1.75]} scale={1.5}>
                      <sphereGeometry />
                      <FakeGlowMaterial
                        glowInternalRadius={0.9}
                        glowSharpness={-0.65}
                        falloff={1.5}
                      />
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

export default TrophyJeremy;

useGLTF.preload('/models/trophyJeremy.glb');
