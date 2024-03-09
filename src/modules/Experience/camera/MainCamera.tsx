import { useCamera } from '@/store';
import { useRef } from 'react';
import { PerspectiveCamera, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const MainCamera = () => {
  const cameraPosition = useCamera((state) => state.cameraPosition);
  const cameraRef = useRef<any>(null);

  return (
    <group>
      <PerspectiveCamera
        position={cameraPosition}
        makeDefault
        ref={cameraRef}
        fov={120}
        aspect={1}
        near={0.1}
        far={100}
      />
    </group>
  );
};

export default MainCamera;
