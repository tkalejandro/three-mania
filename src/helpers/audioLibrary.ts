/**
 * Library to render fast an Audio.
 */
class AudioLibrary {
  /**
   * Sounds like brick
   */
  hit() {
    return new Audio('audio/hit.mp3');
  }

  //THIS SOUNDS ARE DUMMY JUST TO TEST THE CONCEPT OF MANY SOUNDS AT THE SAME TIME
  /**
   * 132kb
   */
  alienTechnology() {
    return new Audio('audio/alienTechnology.mp3');
  }

  /**
   * 58kb
   */
  birdScreech() {
    return new Audio('audio/birdScreech.mp3');
  }

  /**
   * 123kb
   */
  birdSingingFlapingWings() {
    return new Audio('audio/birdSingingFlapingWings.mp3');
  }

  /**
   * 43kb
   */
  cockatooBird() {
    return new Audio('audio/cockatooBird.mp3');
  }

  /**
   * HEAVY MP3 1.2mb
   */
  forestAmbience() {
    return new Audio('audio/forestAmbience.mp3');
  }
  /**
   * HEAVY MP3 3.6mb
   */
  forestSteps() {
    return new Audio('audio/forestSteps.mp3');
  }

  /**
   * WAV song
   */
  omnisphereExperiment() {
    return new Audio('audio/omnisphereExperiment.wav');
  }
}

const audioLibrary = new AudioLibrary();

export default audioLibrary;
