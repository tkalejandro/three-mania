import { ChakraHtml } from '@/modules/Experience/components';
import { Button, useTheme } from '@chakra-ui/react';
import { Html, Sparkles } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { Group } from 'three';

const Navigation = () => {
  const theme = useTheme();

  const htmlRef = useRef<HTMLDivElement>(null!);
  const [opacity, setOpacity] = useState<number>(0);

  useFrame((state, delta) => {
    if (htmlRef.current !== null) {
      if (opacity >= 0.99) {
        // NEDS MORE WORK HERE
        return;
      }
      const targetOpacity = 1; // Target opacity value
      const speed = 1.5; // Adjust the speed of the transition

      setOpacity((prevOpacity) => {
        const newOpacity = Math.min(
          prevOpacity + (targetOpacity - prevOpacity) * delta * speed,
          targetOpacity,
        );
        htmlRef.current.style.opacity = newOpacity.toString();

        return newOpacity;
      });
    }
  });

  return (
    <>
      <Sparkles
        size={6}
        scale={[4, 2, 4]} // Scale of the area
        position-y={0}
        speed={0.2}
        color={theme.colors.primary.secondary}
        count={30}
      />
      <ChakraHtml position={[0, 0.1, 0]}>
        <div
          ref={htmlRef}
          style={{
            height: '30vh',
            minHeight: '300',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <div>
            <Button size="sm">About</Button>
          </div>
          <div>
            <Button size="sm">Project and Awards</Button>
          </div>
          <div>
            <Button size="sm">Media Cover</Button>
          </div>
          <div>
            <Button size="sm">Audio Library</Button>
          </div>
          <div>
            <Button size="sm" colorScheme="secondary">
              Contact
            </Button>
          </div>
        </div>
      </ChakraHtml>
    </>
  );
};

export default Navigation;
