import { useCamera } from '@/store';
import { useRef } from 'react';
import { PerspectiveCamera, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const MainCamera = () => {
  const cameraPosition = useCamera((state) => state.cameraPosition);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  return (
    <group>
      <PerspectiveCamera
        position={cameraPosition}
        makeDefault
        ref={cameraRef}
        fov={130}
        aspect={1}
        near={0.1}
        far={1000}
      />
    </group>
  );
};

export default MainCamera;
