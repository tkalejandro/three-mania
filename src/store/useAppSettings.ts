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
  navigationLoaded: boolean;

  setNavigationLoaded: (value: boolean) => void;
}

/**
 * All related to the APP x Client
 */
const useAppSettingsStore = create<AppSettingsState>((set) => {
  const setNavigationLoaded = (value: boolean) => set({ navigationLoaded: value });
  return {
    loading: false,
    navigationLoaded: false,
    setNavigationLoaded: setNavigationLoaded,
  };
});

const useAppSettings = useAppSettingsStore;

export default useAppSettings;
