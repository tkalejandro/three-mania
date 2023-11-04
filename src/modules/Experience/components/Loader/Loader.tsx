import { Html, useProgress } from '@react-three/drei';
import React from 'react';

/**
 * First Thing to appear :-)
 * @returns
 */
const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress();

  return <Html center>{progress.toFixed(0)} % loaded</Html>;
};

export default Loader;
