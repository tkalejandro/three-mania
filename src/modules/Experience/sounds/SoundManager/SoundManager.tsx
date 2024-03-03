import { Phase } from '@/enums/Experience';
import { audioLibrary } from '@/helpers';
import generalHelpers from '@/helpers/generalHelpers';
import soundHelpers from '@/helpers/soundHelpers';
import { useAppSettings } from '@/store';
import { SoundManagerContext } from '@/types/ExperienceTypes';
import React, { useEffect, useRef, createContext, ReactNode, useContext, useState } from 'react';

const soundManagerContext = createContext<SoundManagerContext | undefined>(undefined);

interface SoundManagerProps {
  children: ReactNode;
}

/**
 * The Sound Manager is in Charge of handle the volume of all sounds.
 * Here we can adjust what sounds to play in certain times using callbacks.
 * All this is possible via useContext.
 */
const SoundManager = ({ children }: SoundManagerProps) => {
  // References
  const mainSoundRef = useRef<HTMLAudioElement>(null!);
  const guitarSoundRef = useRef<HTMLAudioElement>(null!);
  const secretSoundRef = useRef<HTMLAudioElement>(null!);
  const postSecretSoundRef = useRef<HTMLAudioElement>(null!);

  // Progress useful to change smothly the sounds.
  const [guitarProgress, setGuitarProgress] = useState<boolean>(false);
  const [secretProgress, setSecretProgress] = useState<boolean>(false);
  const [postSecretProgress, setPostSecretProgress] = useState<boolean>(false);

  // States
  const phase = useAppSettings((state) => state.phase);
  const [isFirstLayerOn, setIsFirstLayerOn] = useState<boolean>(false);
  const [isPostSecret, setIsPostSecret] = useState<boolean>(false);

  /**
   * This is the heart of all music.
   * If you need to add a new layer and to be in sync
   * Make sure you add it here at volume 0.
   */
  const play = () => {
    if (!generalHelpers.isSafari()) {
      //This is to make sure the rest of logic work when is not safari.
      // Safari force to have muted at the audio tag.
      guitarSoundRef.current.muted = false;
      secretSoundRef.current.muted = false;
      postSecretSoundRef.current.muted = false;
    }
    mainSoundRef.current.muted = false; //Safari
    mainSoundRef.current.volume = 1;
    mainSoundRef.current.play();

    guitarSoundRef.current.volume = 0;
    guitarSoundRef.current.play();

    secretSoundRef.current.volume = 0;
    secretSoundRef.current.play();

    postSecretSoundRef.current.volume = 0;
    postSecretSoundRef.current.play();
  };

  const onFirstLayer = (): void => {
    //If we are already in PostSecret we should not allow to add the guitar layer.
    if (isPostSecret) return;
    // We set this to true, and start the sound.

    guitarSoundRef.current.muted = false; //Safari
    setIsFirstLayerOn(true);
    soundHelpers.smoothVolumeChange(guitarSoundRef, 1, 1, guitarProgress, setGuitarProgress);
  };

  const onSecretVisible = async (): Promise<void> => {
    if (isPostSecret) return;
    // Safari Drama
    if (generalHelpers.isSafari()) {
      secretSoundRef.current.muted = !isFirstLayerOn; //Safari
      guitarSoundRef.current.muted = true; //Safari
      return;
    }

    const changes = [];

    if (isFirstLayerOn) {
      changes.push(() =>
        soundHelpers.smoothVolumeChange(guitarSoundRef, 0, 3, guitarProgress, setGuitarProgress),
      );
    }

    changes.push(() =>
      soundHelpers.smoothVolumeChange(secretSoundRef, 1, 5, secretProgress, setSecretProgress),
    );

    await soundHelpers.handleManyChanges(changes);
  };

  const onSecretNotVisible = async (): Promise<void> => {
    if (isPostSecret) return;
    // Safari Drama
    if (generalHelpers.isSafari()) {
      guitarSoundRef.current.muted = false; //Safari
      secretSoundRef.current.muted = true; //Safari
      return;
    }

    //We save it in an array because there are conditions
    const changes = [];

    if (isFirstLayerOn) {
      changes.push(() =>
        soundHelpers.smoothVolumeChange(guitarSoundRef, 1, 2, guitarProgress, setGuitarProgress),
      );
    }
    changes.push(() =>
      soundHelpers.smoothVolumeChange(secretSoundRef, 0, 2, secretProgress, setSecretProgress),
    );

    await soundHelpers.handleManyChanges(changes);
  };

  const onSecretFound = async (): Promise<void> => {
    //If is already post secret, no need to do this huge calculations.
    if (isPostSecret) {
      return;
    }
    // We are now in post secret.
    setIsPostSecret(true);
    // Safari Drama
    if (generalHelpers.isSafari()) {
      secretSoundRef.current.muted = true; //Safari
      guitarSoundRef.current.muted = true; //Safari
      postSecretSoundRef.current.muted = false; //Safari
      return;
    } else {
      secretSoundRef.current.muted = false; //Safari
      guitarSoundRef.current.muted = false; //Safari
    }

    await soundHelpers.handleManyChanges([
      () =>
        soundHelpers.smoothVolumeChange(secretSoundRef, 0, 2, secretProgress, setSecretProgress),
      () =>
        soundHelpers.smoothVolumeChange(guitarSoundRef, 0, 2, guitarProgress, setGuitarProgress),
      () =>
        soundHelpers.smoothVolumeChange(
          postSecretSoundRef,
          1,
          10,
          postSecretProgress,
          setPostSecretProgress,
        ),
    ]);
  };

  useEffect(() => {
    if (Phase.Ready === phase) return;
    if (Phase.Playing === phase) {
      play();

      return;
    }
  }, [phase]);

  return (
    <>
      {/* AUDIO SHOULD BE INITIALIZED HERE */}
      <audio ref={mainSoundRef} src={audioLibrary.synthBase()} loop muted />
      <audio ref={guitarSoundRef} src={audioLibrary.guitars()} loop muted />
      <audio ref={secretSoundRef} src={audioLibrary.stringsSecretApproach()} loop muted />
      <audio ref={postSecretSoundRef} src={audioLibrary.synthPostSecret()} loop muted />

      <soundManagerContext.Provider
        value={{
          onFirstLayer,
          onSecretVisible,
          onSecretNotVisible,
          onSecretFound,
        }}
      >
        {children}
      </soundManagerContext.Provider>
    </>
  );
};

//This hook is just for the experience, therefore we let it here.
export const useSoundManagerContext = () => {
  const context = useContext(soundManagerContext);
  if (!context) {
    throw new Error('useSoundManagerContext must be used within a SoundManagerContextProvider');
  }
  return context;
};

export default SoundManager;
