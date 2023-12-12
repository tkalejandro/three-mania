import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

/**
 * Trophy Model.
 * Requires light.
 * Trophy by Casey Tumbers
 * [CC-BY] (https://creativecommons.org/licenses/by/3.0/)
 * via Poly Pizza (https://poly.pizza/m/6Xu7mttjodo)
 */
const TrophyCaseyModel = ({ ...props }) => {
  const guitarModel = useGLTF('/models/trophyCasey.glb');

  // Memoize the component based on both props and the loaded model
  const cachedGuitarModel = useMemo(
    () => <primitive object={guitarModel.scene} {...props} />,
    [props, guitarModel],
  );

  return cachedGuitarModel;
};

export default TrophyCaseyModel;

useGLTF.preload('/models/trophyCasey.glb');
