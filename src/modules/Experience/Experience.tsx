'use client';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useProgress, useTexture } from '@react-three/drei';
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
import { useDeveloperSettings } from '@/store';
import { useControls } from 'leva';
import { envMapLibrary } from '@/helpers';
import { Button } from '@nextui-org/button';

/**
 * Heart of the 3D App
 */
const Experience = () => {
  const debugMode = useDeveloperSettings((state) => state.debugMode);
  const setDebugMode = useDeveloperSettings((state) => state.setDebugMode);

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
      <Canvas>
        <Suspense fallback={<LoaderScene />}>
          {debugMode && <Perf position="top-left" />}
          <Environment background files={envMapLibrary.default()} />
          <OrbitControls />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <WelcomeScene position={welcomePosition} />
          <AboutScene position={aboutPosition} />
          <ProjectsAwardsScene position={projectsAwardsPosition} />
          <AudioLibraryScene position={audioLibraryPosition} />
          <MediaCoverageScene position={mediaCoveragePosition} />
          <ContactScene position={contactPosition} />
        </Suspense>
      </Canvas>
      <Button
        variant="shadow"
        color="warning"
        onClick={setDebugMode}
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
      >
        Debug Mode
      </Button>
    </div>
  );
};

export default Experience;
