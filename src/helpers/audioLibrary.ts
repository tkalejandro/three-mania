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
    return new Audio('audio/alienTechnology');
  }

  /**
   * 58kb
   */
  birdScreech() {
    return new Audio('audio/birdScreech');
  }

  /**
   * 123kb
   */
  birdSingingFlapingWings() {
    return new Audio('audio/birdSingingFlapingWings');
  }

  /**
   * 43kb
   */
  cockatooBird() {
    return new Audio('audio/cockatooBird');
  }

  /**
   * HEAVY MP3 1.2mb
   */
  forestAmbience() {
    return new Audio('audio/forestAmbience');
  }
  /**
   * HEAVY MP3 3.6mb
   */
  forestSteps() {
    return new Audio('audio/forestSteps');
  }
}

const audioLibrary = new AudioLibrary();

export default audioLibrary;
