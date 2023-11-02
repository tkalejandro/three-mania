import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

interface LoadedModels {
  /**
   * Is an Object that has a key string with a possivle value of a model loader.
   */
  [key: string]: GLTF;
}

export default LoadedModels;
