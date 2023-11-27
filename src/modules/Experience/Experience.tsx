'use client';
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Lightformer, OrbitControls, SpotLight } from '@react-three/drei';
import {
  AboutScene,
  AudioLibraryScene,
  ContactScene,
  LoaderScene,
  MediaCoverageScene,
  WelcomeScene,
} from './scenes';
import ProjectsAwardsScene from './scenes/ProjectsAwardsScene/ProjectsAwardsScene';
import { Perf } from 'r3f-perf';
import { useCamera, useDeveloperSettings } from '@/store';
import { useControls } from 'leva';
import { envMapLibrary } from '@/helpers';
import { DebugButton } from './components';

import { MainCamera } from './camera';
import { MainLight } from './lights';

/**
 * Heart of the 3D App
 */
const Experience = () => {
  const debugMode = useDeveloperSettings((state) => state.debugMode);

  const {
    welcomePosition,
    aboutPosition,
    projectsAwardsPosition,
    audioLibraryPosition,
    mediaCoveragePosition,
    contactPosition,
  } = useControls('Layout Location', {
    welcomePosition: { value: [0, 0, 0], step: 0.5 },
    aboutPosition: { value: [4, -2, 0], step: 0.5 },
    projectsAwardsPosition: { value: [0, -4, 0], step: 0.5 },
    audioLibraryPosition: { value: [-4, -6, 0], step: 0.5 },
    mediaCoveragePosition: { value: [0, -8, 0], step: 0.5 },
    contactPosition: { value: [4, -10, 0], step: 0.5 },
  });

  return (
    <div id="experience">
      <Canvas flat>
        <Suspense fallback={<LoaderScene />}>
          <MainCamera />
          <MainLight />

          {debugMode && <Perf position="top-left" />}
          {/* <Environment background files={envMapLibrary.gradient()} /> */}

          <WelcomeScene position={welcomePosition} />
          <AboutScene position={aboutPosition} />
          <ProjectsAwardsScene position={projectsAwardsPosition} />
          <AudioLibraryScene position={audioLibraryPosition} />
          <MediaCoverageScene position={mediaCoveragePosition} />
          <ContactScene position={contactPosition} />
        </Suspense>
      </Canvas>
      <DebugButton />
    </div>
  );
};

export default Experience;
