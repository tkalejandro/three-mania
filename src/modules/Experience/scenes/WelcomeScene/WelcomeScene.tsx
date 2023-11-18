import React, { useEffect, useRef, useState } from 'react';
import { act, useFrame, Vector3 } from '@react-three/fiber';
import { Center, Html, OrbitControls } from '@react-three/drei';
import { GuitarModel } from '../../models';
import { Button } from '@nextui-org/button';
import { useCamera } from '@/store';

interface WelcomeSceneProps {
  position: Vector3;
}
enum Phase {
  Ready,
  Playing,
  End,
}

const WelcomeScene = ({ position }: WelcomeSceneProps) => {
  const moveCameraCloser = useCamera((state) => state.moveCameraCloser);

  //Tweek! to keep distance factor and solve bug of button
  // 10 is default
  const [distanceFactor, setDistanceFactor] = useState<undefined | number>(10);

  const guitarRef = useRef<any>();

  const [action, setAction] = useState<Phase>(Phase.Ready);

  useEffect(() => {
    if (!distanceFactor) return;
    setDistanceFactor(undefined);
  }, []);

  const playButton = () => {
    // Lets animate the guitar
    setAction(Phase.Playing);
  };
  const endButton = () => {
    setAction(Phase.Ready);
  };

  useFrame((state, delta) => {
    // Rotate the guitar over time

    if (guitarRef.current == null) return;
    if (action === Phase.Playing) {
      // This rotates 360 max
      if (guitarRef.current.rotation.y >= 6.24) {
        return;
      }
      guitarRef.current.position.x -= delta * 0.09;
      guitarRef.current.rotation.y += delta * 3;
      console.log(guitarRef.current.rotation.y);
    }
  });
  return (
    <Center>
      <group position={position} scale={2}>
        <group ref={guitarRef}>
          <GuitarModel />
        </group>
        <OrbitControls />
        <Html prepend center occlude position={[0, -0.8, 0]}>
          <Button size="lg" onClick={playButton} variant="faded">
            Play
          </Button>
        </Html>
      </group>
    </Center>
  );
};

export default WelcomeScene;
