import { useCamera } from '@/store';
import { useRef } from 'react';
import { PerspectiveCamera, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const MainCamera = () => {
  const cameraPosition = useCamera((state) => state.cameraPosition);
  const cameraRef = useRef<any>(null);

  const scroll = useScroll();

  useFrame((state) => {
    let value = scroll.offset;
    if (!isFinite(value)) {
      //Fix the bug when the number is infinity.
      value = 0;
    }
    // 30.5 Match perfectly for each section that
    state.camera.position.y = -value * 30.0;
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
