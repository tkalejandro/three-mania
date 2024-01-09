import React, { useState, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { Group, Object3DEventMap } from 'three';

/**
 * Headphone
 * Requires light.
 * Created by: sudeepsingh
 * [CCO] (https://creativecommons.org/public-domain/cc0/)
 * via Market Pmnd (https://market.pmnd.rs/model/headphones)
 */
const Headphone = ({ ...props }) => {
  const [gltfScene, setGltfScene] = useState<Group<Object3DEventMap> | null>(null);
  const { scene } = useGLTF('/models/headphone.gltf');

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

export default Headphone;

// Optionally preload the model
useGLTF.preload('/models/headphone.gltf');
