import { Heading } from '@chakra-ui/layout';
import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}
export const H1 = ({ children }: HeadingProps) => (
  <Heading as="h1" size="2xl" marginY={10}>
    {children}
  </Heading>
);

export const H2 = ({ children }: HeadingProps) => (
  <Heading as="h1" size="xl" marginY={4}>
    {children}
  </Heading>
);

export const H3 = ({ children }: HeadingProps) => (
  <Heading as="h1" size="lg" marginY={4}>
    {children}
  </Heading>
);

export const H4 = ({ children }: HeadingProps) => (
  <Heading as="h1" size="md" marginY={4}>
    {children}
  </Heading>
);

export const H5 = ({ children }: HeadingProps) => (
  <Heading as="h1" size="sm" marginY={4}>
    {children}
  </Heading>
);

export const H6 = ({ children }: HeadingProps) => (
  <Heading as="h1" size="xs" marginY={4}>
    {children}
  </Heading>
);
