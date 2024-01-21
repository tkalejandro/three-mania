import { Phase } from '@/enums/Experience';
import { threeHelpers } from '@/helpers';
import { useAppTheme } from '@/hooks';
import { ChakraHtml } from '@/modules/Experience/components';
import { useSoundManagerContext } from '@/modules/Experience/sounds/SoundManager/SoundManager';
import { useAppSettings } from '@/store';
import { ElementTransform } from '@/types/ExperienceTypes';
import { Button } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { Text } from '@chakra-ui/layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { Mesh } from 'three';

interface SecretButtonProps {
  element: ElementTransform;
}

const ScretButton = ({ element }: SecretButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSecretVisible, onSecretNotVisible, onSecretFound } = useSoundManagerContext();
  const [isSecretReveal, setIsSecretReveal] = useState<boolean>(false);
  const [secretAppearFirstTime, setSecretAppearFirstTime] = useState(false);
  const phase = useAppSettings((state) => state.phase);
  const secretRef = useRef<Mesh>(null!);
  const { camera } = useThree();
  const theme = useAppTheme();
  const openSecret = (): void => {
    onOpen();
    setIsSecretReveal(true);
  };

  const closeSecret = (): void => {
    onSecretFound();
    onClose();
  };

  useFrame(() => {
    if (isSecretReveal || phase !== Phase.Playing || !camera || !secretRef.current) {
      return;
    }

    // Calculate if the mesh is within the camera's frustum
    const isMeshVisible = threeHelpers.isObjectInFrustum(secretRef.current, camera);

    if (isMeshVisible) {
      //Sound callback
      onSecretVisible();

      if (!secretAppearFirstTime) {
        setSecretAppearFirstTime(true);
      }
    } else if (secretAppearFirstTime) {
      // This event only starts when the secret is on the screen.
      // Sound callback
      onSecretNotVisible();
    }
  });

  return (
    <>
      <mesh
        ref={secretRef}
        position={element.position}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default';
        }}
        onClick={openSecret}
      >
        <planeGeometry args={element.scale} />
        <meshStandardMaterial color="purple" />
      </mesh>
      <ChakraHtml>
        <Modal isCentered isOpen={isOpen} onClose={closeSecret} size="xl">
          <ModalOverlay />
          <ModalContent margin={4}>
            <ModalHeader color={theme.colors.primary.main}>{'You found me!'}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>
                Music, like a hidden key, unlocks emotions and transforms perception, turning
                ordinary moments into extraordinary discoveries.
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={closeSecret}>
                Feelin' it!
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </ChakraHtml>
    </>
  );
};

export default ScretButton;

// Function to check if an object is in the camera's frustum
