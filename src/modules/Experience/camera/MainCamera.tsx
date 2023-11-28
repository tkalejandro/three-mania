import { useAppSettings, useCamera } from '@/store';
import { useEffect, useRef } from 'react';
import { PerspectiveCamera, ScrollControlsState, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

// Extend the existing ScrollControlsState type to include the scroll property
interface ExtendedScrollControlsState extends ScrollControlsState {
  scroll: {
    current: number;
  };
}

const MainCamera = () => {
  const cameraPosition = useCamera((state) => state.cameraPosition);
  const cameraRef = useRef<any>(null);

  const scroll = useScroll() as ExtendedScrollControlsState;

  useFrame((state) => {
    console.log(scroll.scroll);

    state.camera.position.y = -scroll.scroll.current * 500;
  });

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
