import { Button, ButtonGroup } from '@chakra-ui/button';
import { Box, Flex, Heading } from '@chakra-ui/layout';
import React from 'react';

/**
 * Menu of the game
 * Located at the center
 */
export const GameMenu = () => {
  return (
    <Flex
      zIndex={0}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      sx={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      <Heading size="md">Three Mania Logo Goes here</Heading>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        flexDirection="column"
        sx={{
          '*': {
            mt: 4,
            width: 260,
          },
        }}
      >
        <Button width="100%" colorScheme="primary" size="lg">
          Start Game
        </Button>
        <Button width="100%" colorScheme="secondary" size="lg">
          Settings
        </Button>
        <Button width="100%" colorScheme="secondary" size="lg">
          FAQ
        </Button>
      </Flex>
    </Flex>
  );
};
