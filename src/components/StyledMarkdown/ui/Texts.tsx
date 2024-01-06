import { Text } from '@chakra-ui/layout';
import React, { ReactNode } from 'react';

interface TextStyleProps {
  children: ReactNode;
}

export const P = ({ children }: TextStyleProps) => (
  <Text as="p" fontSize="md" my={4}>
    {children}
  </Text>
);

export const Em = ({ children }: TextStyleProps) => (
  <Text as="em" fontSize="md">
    {children}
  </Text>
);

export const I = ({ children }: TextStyleProps) => (
  <Text as="i" fontSize="md">
    {children}
  </Text>
);

export const B = ({ children }: TextStyleProps) => (
  <Text as="b" fontSize="md">
    {children}
  </Text>
);

export const Strong = ({ children }: TextStyleProps) => (
  <Text as="strong" fontSize="md">
    {children}
  </Text>
);

export const Underline = ({ children }: TextStyleProps) => (
  <Text as="u" fontSize="md">
    {children}
  </Text>
);

export const Abbr = ({ children }: TextStyleProps) => (
  <Text as="abbr" fontSize="md">
    {children}
  </Text>
);

export const Cite = ({ children }: TextStyleProps) => (
  <Text as="cite" fontSize="md">
    {children}
  </Text>
);

export const Del = ({ children }: TextStyleProps) => (
  <Text as="del" fontSize="md">
    {children}
  </Text>
);

export const Ins = ({ children }: TextStyleProps) => (
  <Text as="ins" fontSize="md">
    {children}
  </Text>
);

export const Kbd = ({ children }: TextStyleProps) => (
  <Text as="kbd" fontSize="md">
    {children}
  </Text>
);

export const Mark = ({ children }: TextStyleProps) => (
  <Text as="mark" fontSize="md">
    {children}
  </Text>
);

export const Strikethrough = ({ children }: TextStyleProps) => (
  <Text as="s" fontSize="md">
    {children}
  </Text>
);

export const Samp = ({ children }: TextStyleProps) => (
  <Text as="samp" fontSize="md">
    {children}
  </Text>
);

export const Sub = ({ children }: TextStyleProps) => (
  <Text as="sub" fontSize="xs">
    {children}
  </Text>
);

export const Sup = ({ children }: TextStyleProps) => (
  <Text as="sup" fontSize="xs">
    {children}
  </Text>
);
