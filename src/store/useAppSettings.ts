import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppSettingsState {
  /**
   * Global loading
   */
  loading: boolean;
}

/**
 * All related to the APP x Client
 */
const useAppSettingsStore = create<AppSettingsState>()(
  // Save data in local storage
  persist(
    (set, get) => {
      // Here we can add some logics

      return {
        // Our State
        loading: false,
      };
    },
    {
      // This is how persist will find and save the state in LocalStorage
      name: 'app-settings-storage',
    },
  ),
);

const useAppSettings = useAppSettingsStore;

export default useAppSettings;
