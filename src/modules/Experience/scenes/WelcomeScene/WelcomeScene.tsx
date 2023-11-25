import React, { useEffect, useRef, useState } from 'react';
import { act, GroupProps, ThreeElements, useFrame, Vector3 } from '@react-three/fiber';
import { Center, Html, OrbitControls } from '@react-three/drei';
import { GuitarModel } from '../../models';
import { useCamera } from '@/store';
import { Group } from 'three';
import { Navigation } from './components';
import { Button } from '@chakra-ui/react';
import ThreeDButton from '../../components/ThreeDButton/ThreeDButton';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '@/theme/theme';
import { ChakraHtml } from '../../components';

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

  const guitarRef = useRef<Group>(null!);
  const htmlRef = useRef<Group>(null!);

  const [action, setAction] = useState<Phase>(Phase.Ready);
  const [navigationOpen, setNavigationOpen] = useState<boolean>(false);

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
        // This means just a little inclination to the left
        if (guitarRef.current.rotation.z >= 0.1) {
          // Our animation finished lets open the navigation
          if (navigationOpen) return;
          setNavigationOpen(true);
          return;
        }
        guitarRef.current.position.x -= delta * 0.1;
        guitarRef.current.rotation.z += delta * 0.1;
        return;
      }
      guitarRef.current.position.z -= delta * 0.09;
      guitarRef.current.position.x -= delta * 0.09;
      guitarRef.current.rotation.y += delta * 3.5;
      console.log(guitarRef.current.rotation.y);
    }
  });
  return (
    <Center>
      <group position={position} scale={2}>
        <group ref={guitarRef}>
          <GuitarModel />
        </group>
        {navigationOpen ? (
          <Navigation />
        ) : (
          <group ref={htmlRef}>
            <ChakraHtml prepend center occlude position={[0, -0.8, 0]}>
              <Button colorScheme="primary" onClick={playButton} size="lg">
                Play
              </Button>
            </ChakraHtml>
          </group>
        )}
      </group>
    </Center>
  );
};

export default WelcomeScene;
