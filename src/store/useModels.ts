import { LoadedModels } from '@/types/ExperienceTypes';
import { create } from 'zustand';

interface ModelsState {
  // Variables
  /**
   * Models from the project
   */
  models?: LoadedModels;

  /**
   * It add the models to the store
   */
  setModels: (value: LoadedModels) => void;
}

/**
 * All related to the App X Developer. Debugger Settings and more
 */
const ModelsStore = create<ModelsState>()((set, get) => {
  // Here we can add some logics

  return {
    // Our State
    models: undefined,
    setModels: (models) => set({ models: models }),
  };
});

const useModels = ModelsStore;

export default useModels;
