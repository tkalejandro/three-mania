import { Phase } from '@/enums/Experience';
import { audioLibrary } from '@/helpers';
import { useAppSettings } from '@/store';
import React, { useEffect, useRef, createContext, ContextType, ReactNode, useContext } from 'react';

//TODO Can this be Type safe??
const SoundManagerContext = createContext(undefined as any);

interface SoundManagerProps {
  children: ReactNode;
}

const SoundManager = ({ children }: SoundManagerProps) => {
  const mainSoundRef = useRef<HTMLAudioElement>(null!);
  const guitarSoundRef = useRef<HTMLAudioElement>(null!);

  const phase = useAppSettings((state) => state.phase);

  /**
   * This is the heart of all music.
   * If you need to add a new layer and to be in sync
   * Make sure you add it here at volume 0.
   */
  const play = () => {
    mainSoundRef.current.volume = 1;
    mainSoundRef.current.play();

    guitarSoundRef.current.volume = 0;
    guitarSoundRef.current.play();
  };

  /**
   * This is when user interact with the first layer
   */
  const onFirstLayer = () => {
    guitarSoundRef.current.volume = 1;
  };

  useEffect(() => {
    if (Phase.Ready === phase) return;
    if (Phase.Playing === phase) {
      play();

      return;
    }
  }, [phase]);
  console.log(mainSoundRef.current?.volume);
  return (
    <>
      {/* AUDIO SHOULD BE INITIALIZED HERE */}
      <audio ref={mainSoundRef} src={audioLibrary.synthBase()} loop />
      <audio ref={guitarSoundRef} src={audioLibrary.guitars()} loop />

      {/* <button onClick={addFirstLayer} style={{ zIndex: 2 }}>
        Click
      </button> */}
      <SoundManagerContext.Provider value={{ onFirstLayer }}>
        {children}
      </SoundManagerContext.Provider>
    </>
  );
};

//This hook is just for the experience, therefore we let it here.
export const useSoundManagerContext = () => {
  const context = useContext(SoundManagerContext);
  if (!context) {
    throw new Error('useSoundManagerContext must be used within a SoundManagerContextProvider');
  }
  return context;
};

export default SoundManager;
