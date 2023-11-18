import { Html, useProgress } from '@react-three/drei';
import React from 'react';

/**
 * First Thing to appear :-)
 * This might dissapear in the future.
 * @returns
 */
const LoaderScene = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return <Html center>{progress.toFixed(0)} % loaded</Html>;
};

export default LoaderScene;
