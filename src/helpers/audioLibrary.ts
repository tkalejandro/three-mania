class AudioLibrary {
  hit() {
    return new Audio('audio/hit.mp3');
  }
}

const audio = new AudioLibrary();

export default audio;
