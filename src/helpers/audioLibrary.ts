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
}

const audioLibrary = new AudioLibrary();

export default audioLibrary;
