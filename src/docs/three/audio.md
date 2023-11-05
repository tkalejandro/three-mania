# Audio

In this project, we are trying to avoid hardcoded strings and make it easier for other developers to reuse audio.

## Adding new audio

To add a new audio you need to go the public `public/audio` folders and the new audio.
Make sure you are using a valid format. We can recommend the `mp3` format. Make sure also that is very small file.

If you need quality sounds, then you should use `wav`. But take in count is really heavy for the final user.

## Audio library helper

All audios need to be reusable, therefore it needs to be added to the `audioLibrary` inside the `helpers` folder.
This helper what it does is to initiate an audio and make it easy to find when needed. Also it make it safe, because the new developer dont need to change the path everytime to use a new audio. And if the audio path change for some reason, it only needs to be change once. 

## Example using an audio

Here you can find a dummy use of an audio. Please adapt to your circunstances

```
import { audioLibrary } from '@/helpers';
...

const hitSound = audioLibrary.hit();
  const dummyAudio = () => {
    hitSound.currentTime = 0;
    hitSound.volume = 1;
    hitSound.play();
  };
```


