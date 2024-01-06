import { Box, Flex } from '@chakra-ui/layout';
import React, { ReactNode } from 'react';

interface ImageProps {
  children: ReactNode;
}

export const Img = ({ children, ...props }: ImageProps) => {
  return (
    <Box as="img" {...props} maxWidth={800}>
      {children}
    </Box>
  );
};
