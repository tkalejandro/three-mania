import React, { useEffect, useRef, useState } from 'react';
import { useFrame, Vector3 } from '@react-three/fiber';
import { Center, Float, Html, useProgress, useScroll } from '@react-three/drei';
import { GuitarModel, Headphone } from '../../models';
import { Group, ShaderMaterial } from 'three';
import { Message } from './components';
import { Button } from '@chakra-ui/react';
import { ChakraHtml } from '../../components';
import { Phase } from '@/enums/Experience';
import { audioLibrary } from '@/helpers';
import gsap from 'gsap';
import { loaderFragmentShader, loaderVertexShader } from '../../shaders/loaderShader';
import { useAppTheme } from '@/hooks';

interface WelcomeSceneProps {
  position: Vector3;
}

const WelcomeScene = ({ position }: WelcomeSceneProps) => {
  //Tweek! to keep distance factor and solve bug of button
  // 10 is default
  const [distanceFactor, setDistanceFactor] = useState<undefined | number>(10);

  const theme = useAppTheme();

  const headphoneRef = useRef<Group>(null!);
  const htmlRef = useRef<HTMLDivElement>(null!);
  const loaderShaderRef = useRef<ShaderMaterial>(null!);

  const [opacity, setOpacity] = useState<number>(1);
  const [action, setAction] = useState<Phase>(Phase.Ready);
  const [navigationOpen, setNavigationOpen] = useState<boolean>(false);

  const mainSound = audioLibrary.synthBase();

  useEffect(() => {
    if (!distanceFactor) return;
    setDistanceFactor(undefined);
  }, []);

  const playButton = () => {
    mainSound.currentTime = 0;
    mainSound.volume = 1;
    mainSound.loop = true;

    mainSound.play();
    // Lets animate the guitar
    setAction(Phase.Playing);
  };

  useFrame((state, delta) => {
    // Rotate the headphone over time
    if (headphoneRef.current == null) return;
    if (action === Phase.Playing) {
      if (htmlRef.current != null) {
        if (opacity !== 0) {
          // If user clicks the navigation lets dissapear the button quickly
          const targetOpacity = 0;
          const speed = 4;
          setOpacity((prevOpacity) => {
            const newOpacity = Math.max(prevOpacity - delta * speed, targetOpacity);
            htmlRef.current.style.opacity = newOpacity.toString();
            return newOpacity;
          });
        }
      }

      // This rotates 360 max
      if (headphoneRef.current.rotation.y >= 6.24) {
        // This means just a little inclination to the left
        if (headphoneRef.current.rotation.z >= 0.05) {
          // Our animation finished lets open the navigation
          if (navigationOpen) return;
          setNavigationOpen(true);
          return;
        }
        headphoneRef.current.position.x -= delta * 0.0001;
        headphoneRef.current.rotation.z += delta * 0.1;
        return;
      }
      headphoneRef.current.position.z -= delta * 0.09;
      headphoneRef.current.position.x -= delta * 0.000001;
      headphoneRef.current.rotation.y += delta * 4.5;
    }
  });

  useScroll();

  // If the loaderShaderRef and HtmlRef
  // are loaded
  if (loaderShaderRef.current && htmlRef.current) {
    let animation = gsap.timeline();
    animation.to(loaderShaderRef.current.uniforms.uFull, {
      value: 1.01,
      duration: 1,
      ease: 'back.inOut',
    });
  }

  return (
    <>
      <mesh scale={5} position={[0, 0, 1]}>
        <planeGeometry />
        <shaderMaterial
          ref={loaderShaderRef}
          vertexShader={loaderVertexShader}
          fragmentShader={loaderFragmentShader}
          uniforms={{
            uFull: { value: -1.01 },
            uColor: { value: theme.colors.primary.main.replace('#', '0x') },
          }}
        />
      </mesh>

      <group position={position} scale={2}>
        <group ref={headphoneRef}>{/* <Headphone scale={0.25} /> */}</group>

        {navigationOpen ? (
          <>
            <Message />
          </>
        ) : (
          <>
            <ChakraHtml ref={htmlRef} occlude="blending" prepend center position={[0, 0, 0]}>
              <Button colorScheme="primary" onClick={playButton} size="lg" variant="outline">
                Play
              </Button>
            </ChakraHtml>
          </>
        )}
      </group>
    </>
  );
};

export default WelcomeScene;
