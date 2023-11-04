// app/providers.tsx
'use client';

import { useDeveloperSettings } from '@/store';
import { Leva } from 'leva';

export function Providers({ children }: { children: React.ReactNode }) {
  const debugMode = useDeveloperSettings((state) => state.debugMode);

  return (
    <>
      <Leva hidden={!debugMode} />
      {children}
    </>
  );
}
