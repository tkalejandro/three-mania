// app/providers.tsx
"use client";

import { useDeveloperSettings } from "@/store";
import { Leva } from "leva";
import { useEffect } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const debugMode = useDeveloperSettings((state) => state.debugMode);
  const setDebugMode = useDeveloperSettings((state) => state.setDebugMode);

  return (
    <>
      <Leva hidden={!debugMode} />
      {children}
    </>
  );
}
