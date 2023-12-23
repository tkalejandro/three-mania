import React, { useState, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group, Object3DEventMap } from 'three';

/**
 * Iphone X
 * Requires light.
 * iPhone X by Sriniwasjha
 * [CCO] (https://creativecommons.org/public-domain/cc0/)
 * via Market Pmnd (https://market.pmnd.rs/model/iphone-x)
 */
const IphoneX = ({ ...props }) => {
  const [gltfScene, setGltfScene] = useState<Group<Object3DEventMap> | null>(null);
  const { scene } = useGLTF('/models/iphoneX.gltf');

  useEffect(() => {
    setGltfScene(scene);

    return () => {
      // Clean up if necessary
    };
  }, []);

  // Memoize the component based on both props and the loaded model
  const cachedModel = useMemo(() => {
    if (gltfScene) {
      return <primitive object={gltfScene.clone()} {...props} />;
    } else {
      return null; // Handle the case where the model hasn't loaded yet
    }
  }, [props, gltfScene]);

  return cachedModel;
};

export default IphoneX;

// Optionally preload the model
useGLTF.preload('/models/iphoneX.gltf');
