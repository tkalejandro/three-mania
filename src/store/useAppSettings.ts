import { Phase } from '@/enums/Experience';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppSettingsState {
  /**
   * Global loading
   */
  loading: boolean;
  /**
   * Indicates if navigation already load.
   */
  experienceLoaded: boolean;
  /**
   * Indicates the current phase of the experience
   */
  phase: Phase;

  setExperienceLoaded: (value: boolean) => void;
  setPhase: (value: Phase) => void;
}

/**
 * All related to the APP x Client
 */
const useAppSettingsStore = create<AppSettingsState>((set) => {
  const setExperienceLoaded = (value: boolean) => set({ experienceLoaded: value });
  const setPhase = (value: Phase) => set({ phase: value });

  return {
    loading: false,
    experienceLoaded: false,
    setExperienceLoaded,
    phase: Phase.Ready,
    setPhase,
  };
});

const useAppSettings = useAppSettingsStore;

export default useAppSettings;
