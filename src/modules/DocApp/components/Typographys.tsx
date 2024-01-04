import { Text } from '@chakra-ui/layout';
import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
}
export const P = ({ children }: HeadingProps) => (
  <Text as="p" fontSize="md">
    {children}
  </Text>
);

export const Em = ({ children }: HeadingProps) => (
  <Text as="em" fontSize="md">
    {children}
  </Text>
);

export const I = ({ children }: HeadingProps) => (
  <Text as="i" fontSize="md">
    {children}
  </Text>
);

export const B = ({ children }: HeadingProps) => (
  <Text as="b" fontSize="md">
    {children}
  </Text>
);

export const Strong = ({ children }: HeadingProps) => (
  <Text as="strong" fontSize="md">
    {children}
  </Text>
);
