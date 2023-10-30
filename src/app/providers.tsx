// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';

import { useDeveloperSettings } from '@/store';
import { Leva } from 'leva';
import { useEffect } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const debugMode = useDeveloperSettings((state) => state.debugMode);
  const setDebugMode = useDeveloperSettings((state) => state.setDebugMode);

  return (
    <>
      <NextUIProvider>
        <Leva hidden={!debugMode} />
        {children}
      </NextUIProvider>
    </>
  );
}
