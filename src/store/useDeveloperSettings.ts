import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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
const useDeveloperSettingsStore = create<DeveloperSettingsState>()(
    // Save data in local storage
    persist(
        (set, get) => {
            // Here we can add some logics

            /**
             * Toggles the debug mode.
             */
            const setDebugMode = () => set({debugMode: !get().debugMode}) 
            return ({
                // Our State
                debugMode: false,
                setDebugMode,
            })
        },
        {
            // This is how persist will find and save the state in LocalStorage
            name: 'app-settings-storage',
        }
    )
)

const useDeveloperSettings = useDeveloperSettingsStore

export default useDeveloperSettings