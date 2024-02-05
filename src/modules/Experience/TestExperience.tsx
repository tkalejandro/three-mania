'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Environment,
  Float,
  MeshPortalMaterial,
  OrbitControls,
  PerspectiveCamera,
  useTexture,
  Image,
} from '@react-three/drei';
import {
  AboutScene,
  AddMusicScene,
  AudioLibraryScene,
  ContactScene,
  LoaderScene,
  MediaCoverageScene,
  ProjectsAwardsScene,
  WelcomeScene,
} from './scenes';

import { Perf } from 'r3f-perf';
import { useCamera, useDeveloperSettings } from '@/store';
import { DebugButton } from './components';
import { MainLight } from './lights';
import * as THREE from 'three';
import { MainCamera } from './camera';
import { Message } from './scenes/WelcomeScene/components';
import { imageLibrary } from '@/helpers';
import { Gallery } from './scenes/ProjectsAwardsScene/components';
import { SoundManager } from './sounds';

/**
 * Welcome to the TEST PAGE. Useful to build a 3D scene isolated from the project.
 * Once you finish, make sure it works in the real Experience.
 * Clean the TestExperience when finish.
 */
const TestExperience = () => {
  // ****** DONT DELETE
  const debugMode = useDeveloperSettings((state) => state.debugMode);
  const cameraPosition = useCamera((state) => state.cameraPosition);
  // ******************

  return (
    <div id="experience">
      <SoundManager>
        <Canvas>
          {debugMode && <Perf position="top-left" />}
          <PerspectiveCamera
            position={cameraPosition}
            makeDefault
            fov={90}
            aspect={1}
            near={0.1}
            far={4}
          />
          {/* ADD YOUR SCENE CONTROLS OR LIGHTS HERE */}
          <MainLight />
          {/* <ambientLight intensity={0.5} /> */}
          <Environment preset="sunset" />
          {/* <OrbitControls /> */}
          <AboutScene position={[0, 0, 0]} scenePositionY={0} />
          {/* UNTIL HERE */}
        </Canvas>
      </SoundManager>
      {/* DONT DELETE BUTTON */}
      <DebugButton />
    </div>
  );
};

export default TestExperience;
