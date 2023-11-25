import { useCamera } from '@/store';
import { useRef } from 'react';
import { PerspectiveCamera, useHelper, useAspect } from '@react-three/drei';
import * as THREE from 'three';
const MainCamera = () => {
  const cameraPosition = useCamera((state) => state.cameraPosition);
  const cameraRef = useRef<any>(null);

  const t = useAspect(window.screen.width, window.screen.height);

  useHelper(cameraRef, THREE.CameraHelper);

  return (
    <group>
      <PerspectiveCamera
        position={cameraPosition}
        makeDefault
        ref={cameraRef}
        fov={90}
        aspect={1}
        near={0.1}
        far={4}
      />
    </group>
  );
};

export default MainCamera;
