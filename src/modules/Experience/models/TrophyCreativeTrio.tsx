import React, { useEffect, useMemo, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group, Object3DEventMap } from 'three';
import { EnhancedGroup, FakeGlowMaterial } from '../components';
import { GroupProps, PrimitiveProps } from '@react-three/fiber';

interface ModelProps extends GroupProps {
  glow?: boolean;
}

/**
 * Trophy Model.
 * Requires light.
/* Trophy by CreativeTrio (https://poly.pizza/m/fLy8KmmD1t)
 */
const TrophyCreativeTrio = ({ glow = false, ...props }: ModelProps) => {
  const [gltfScene, setGltfScene] = useState<Group<Object3DEventMap> | null>(null);
  const { scene } = useGLTF('/models/trophyCreativeTrio.glb');

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
        <EnhancedGroup {...props}>
          <primitive object={gltfScene.clone()}>
            {glow && (
              <>
                <mesh position={[0.095, 0.22, -0.08]} scale={0.125}>
                  <sphereGeometry />
                  <FakeGlowMaterial glowInternalRadius={1} glowSharpness={-0.65} falloff={0} />
                </mesh>
                <mesh scale={0.065} position={[0.09, 0.07, -0.075]}>
                  <sphereGeometry />
                  <FakeGlowMaterial glowInternalRadius={1} glowSharpness={-0.8} falloff={1} />
                </mesh>
              </>
            )}
          </primitive>
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
