import { useAppTheme } from '@/hooks';
import { ChakraHtml } from '@/modules/Experience/components';
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
import React from 'react';

interface SecretButtonProps {
  element: ElementTransform;
}

const ScretButton = ({ element }: SecretButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useAppTheme();
  const openSecret = (): void => {
    onOpen();
  };

  const closeSecret = (): void => {
    onClose();
  };
  return (
    <>
      <mesh
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
