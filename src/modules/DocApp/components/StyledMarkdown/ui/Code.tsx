import { Box, Code as CodeUI } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

interface CodeProps {
  children: ReactNode;
}
export const Code = ({ children }: CodeProps) => {
  return (
    <CodeUI
      overflow={'auto'}
      px={2}
      mx={1}
      borderRadius={10}
      colorScheme="gray"
      position="relative"
      top={'5px'}
    >
      {children}
    </CodeUI>
  );
};

export const Pre = ({ children }: CodeProps) => {
  return (
    <CodeUI
      overflow={'auto'}
      as="pre"
      my={4}
      py={3}
      px={2}
      colorScheme="gray"
      borderRadius={10}
      width={'100%'}
    >
      {children}
    </CodeUI>
  );
};
