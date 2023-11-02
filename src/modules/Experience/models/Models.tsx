import React, { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { LoadedModels } from '@/types/ExperienceTypes';
import { titles, paths } from './modelPaths';
import { useModels } from '@/store';

/**
 * This component only generates functions
 */
const Models = () => {
  const loadingModels = useGLTF(paths);
  const setModels = useModels((state) => state.setModels);

  useEffect(() => {
    let finalObect: LoadedModels = {};
    loadingModels.forEach((model, i) => {
      const key = titles[i];
      finalObect[key.toLowerCase()] = model;
    });

    setModels(finalObect);
  }, []);

  return null;
};

export default Models;

useGLTF.preload(paths);
