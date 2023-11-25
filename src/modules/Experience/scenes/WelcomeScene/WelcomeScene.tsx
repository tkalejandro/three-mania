import React, { useEffect, useRef, useState } from 'react';
import { act, GroupProps, ThreeElements, useFrame, Vector3 } from '@react-three/fiber';
import { Center, Html, OrbitControls, Sparkles } from '@react-three/drei';
import { GuitarModel } from '../../models';
import { useCamera } from '@/store';
import { Group } from 'three';
import { Navigation } from './components';
import { Button, useTheme } from '@chakra-ui/react';
import { ChakraHtml } from '../../components';
import { Phase } from '@/enums/Experience';
import { audioLibrary } from '@/helpers';

interface WelcomeSceneProps {
  position: Vector3;
}

const WelcomeScene = ({ position }: WelcomeSceneProps) => {
  const moveCameraCloser = useCamera((state) => state.moveCameraCloser);

  const theme = useTheme();
  //Tweek! to keep distance factor and solve bug of button
  // 10 is default
  const [distanceFactor, setDistanceFactor] = useState<undefined | number>(10);

  const guitarRef = useRef<Group>(null!);
  const htmlRef = useRef<HTMLDivElement>(null!);

  const [opacity, setOpacity] = useState<number>(1);
  const [action, setAction] = useState<Phase>(Phase.Ready);
  const [navigationOpen, setNavigationOpen] = useState<boolean>(false);
  const mainSound = audioLibrary.omnisphereExperiment();

  useEffect(() => {
    if (!distanceFactor) return;
    setDistanceFactor(undefined);
  }, []);

  const playButton = () => {
    // Lets animate the guitar
    mainSound.currentTime = 0;
    mainSound.volume = 1;
    mainSound.loop = true;

    mainSound.play();
    setAction(Phase.Playing);
  };

  useFrame((state, delta) => {
    // Rotate the guitar over time

    if (guitarRef.current == null) return;
    if (action === Phase.Playing) {
      if (htmlRef.current != null) {
        if (opacity !== 0) {
          // If user clicks the navigation lets dissapear the button quickly
          const targetOpacity = 0;
          const speed = 3;
          setOpacity((prevOpacity) => {
            const newOpacity = Math.max(prevOpacity - delta * speed, targetOpacity);
            htmlRef.current.style.opacity = newOpacity.toString();
            return newOpacity;
          });
        }
      }

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
          <ChakraHtml ref={htmlRef} prepend center occlude position={[0, -0.8, 0]}>
            <Button colorScheme="primary" onClick={playButton} size="lg" variant="solid">
              Play
            </Button>
          </ChakraHtml>
        )}
      </group>
    </Center>
  );
};

export default WelcomeScene;
