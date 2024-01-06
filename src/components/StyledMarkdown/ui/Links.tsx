'use client';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/layout';
import React, { ReactNode } from 'react';

interface LinkProps {
  children: ReactNode;
}

export const ExternalLink = ({ children, ...props }: LinkProps) => (
  <Link as="a" fontSize="md" {...props} isExternal>
    {children} <ExternalLinkIcon mx="2px" />
  </Link>
);
