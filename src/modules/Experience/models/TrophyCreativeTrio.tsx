import React, { useMemo } from 'react';
import { useGLTF } from '@react-three/drei';

/**
 * Trophy Model.
 * Requires light.
/* Trophy by CreativeTrio (https://poly.pizza/m/fLy8KmmD1t)
 */
const TrophyCreativeTrioModel = ({ ...props }) => {
  const guitarModel = useGLTF('/models/trophyCreativeTrio.glb');

  // Memoize the component based on both props and the loaded model
  const cachedGuitarModel = useMemo(
    () => <primitive object={guitarModel.scene} {...props} />,
    [props, guitarModel],
  );

  return cachedGuitarModel;
};

export default TrophyCreativeTrioModel;

useGLTF.preload('/models/trophyCreativeTrio.glb');
