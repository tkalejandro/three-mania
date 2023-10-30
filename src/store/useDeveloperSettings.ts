import { create } from "zustand";

interface DeveloperSettingsState {
  // Variables
  /**
   * Global mode
   */
  debugMode: boolean;

  // Actions
  setDebugMode: () => void;
}

/**
 * All related to the App X Developer. Debugger Settings and more
 */
const useDeveloperSettingsStore = create<DeveloperSettingsState>()((
  set,
  get,
) => {
  // Here we can add some logics

  /**
   * Toggles the debug mode.
   */
  const setDebugMode = () => set({ debugMode: !get().debugMode });
  return {
    // Our State
    debugMode: false,
    setDebugMode,
  };
});

const useDeveloperSettings = useDeveloperSettingsStore;

export default useDeveloperSettings;
