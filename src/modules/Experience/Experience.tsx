'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerformanceMonitor, ScrollControls } from '@react-three/drei';
import { Perf } from 'r3f-perf';
import { useAppSettings, useDeveloperSettings } from '@/store';
import { useControls } from 'leva';
import { DebugButton } from './components';
import { MainCamera } from './camera';
import { MainLight } from './lights';
import { SoundManager } from './sounds';
import { Loader } from './loader';
import * as THREE from 'three';
import MainEnvironment from './environment/MainEnvironment';
import { GameMenu } from './navigation';

/**
 * Heart of the 3D App
 */
const Experience = () => {
  const debugMode = useDeveloperSettings((state) => state.debugMode);

  const [dpr, setDpr] = useState(1.5);

  return (
    <>
      <div id="experience">
        {/* Experience Related */}
        <Suspense fallback={<Loader />}>
          <Canvas flat dpr={dpr}>
            <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)}>
              <MainCamera />
              <MainLight />
              <MainEnvironment />
            </PerformanceMonitor>
          </Canvas>
          {/* Layouts Over */}
          <GameMenu />
        </Suspense>

        <DebugButton />
      </div>
    </>
  );
};

export default Experience;
