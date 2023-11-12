'use client';

import { NextUIProvider } from '@nextui-org/react';
import { useDeveloperSettings } from '@/store';
import { Leva } from 'leva';

export function Providers({ children }: { children: React.ReactNode }) {
  const debugMode = useDeveloperSettings((state) => state.debugMode);

  return (
    <NextUIProvider>
      <Leva hidden={!debugMode} />
      <div className="w-full border-2 max-w-lg md:margin-auto ">{children}</div>
    </NextUIProvider>
  );
}
