import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

/**
 * Trophy Model.
 * Requires light.
 * Trophy by jeremy
 * [CC-BY] (https://creativecommons.org/licenses/by/3.0/)
 * via Poly Pizza (https://poly.pizza/m/cYUZdUqlNYd)
 */
const TrophyJeremyModel = ({ ...props }) => {
  const guitarModel = useGLTF('/models/trophyJeremy.glb');

  // Memoize the component based on both props and the loaded model
  const cachedGuitarModel = useMemo(
    () => <primitive object={guitarModel.scene} {...props} />,
    [props, guitarModel],
  );

  return cachedGuitarModel;
};

export default TrophyJeremyModel;

useGLTF.preload('/models/trophyJeremy.glb');
