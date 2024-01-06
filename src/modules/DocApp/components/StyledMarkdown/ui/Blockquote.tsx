import { Box } from '@chakra-ui/layout';
import React, { ReactNode } from 'react';

interface BlockquoteProps {
  children: ReactNode;
}

/**
 * TODO This doesnt work as expected. It renders as P tag
 */
export const Blockquote = ({ children }: BlockquoteProps) => {
  return <Box as="blockquote">{children}</Box>;
};
