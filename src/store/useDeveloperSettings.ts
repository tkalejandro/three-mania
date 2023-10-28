import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface DeveloperSettingsState {
    /**
     * Global mode
     */
    developerMode: boolean;
}

/**
 * All related to the App X Developer. Debugger Settings and more
 */
const useDeveloperSettingsStore = create<DeveloperSettingsState>()(
    // Save data in local storage
    persist(
        (set, get) => {
            // Here we can add some logics

            return ({
                // Our State
                developerMode: false
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