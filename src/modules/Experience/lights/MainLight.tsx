import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function MainLight() {
  const light = useRef();

  // useFrame((state) => {
  //     // This is jusrt to change the positon of camera
  //     // The idea is that each frame the light is moving
  //     light.current.position.z = state.camera.position.z + 1 - 8

  //     // The light is following the camera not the BALL
  //     light.current.target.position.z = state.camera.position.z - 8
  //     // And like this we update it
  //     light.current.target.updateMatrixWorld()
  // })
  return (
    <>
      <directionalLight
        //ref={light}
        castShadow
        position={[-0.25, 1, 1]}
        intensity={10.5}
        //shadow-mapSize={ [ 1024, 1024 ] }
        // shadow-camera-near={1}
        // shadow-camera-far={10}
        // shadow-camera-top={10}
        // shadow-camera-right={10}
        // shadow-camera-bottom={-10}
        // shadow-camera-left={-10}
      />
      <ambientLight intensity={1.5} />
    </>
  );
}
