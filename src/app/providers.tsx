'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { useDeveloperSettings } from '@/store';
import { Leva } from 'leva';

export function Providers({ children }: { children: React.ReactNode }) {
  const debugMode = useDeveloperSettings((state) => state.debugMode);

  return (
    <ChakraProvider>
      <Leva hidden={!debugMode} />
      {children}
    </ChakraProvider>
  );
}
