import { TextureMaps } from '@/types/ExperienceTypes';

/**
 * Library to import quickly textures.
 * - https://polyhaven.com/textures
 */
class TextureLibrary {
  /**
   * Stones, useful for a floor, mimic arid zones, bright and more.
   */
  pavingStones(): TextureMaps {
    return {
      map: 'textures/PavingStones092_1K_Color.jpg',
      displacementMap: 'textures/PavingStones092_1K_Displacement.jpg',
      normalMap: 'textures/PavingStones092_1K_Normal.jpg',
      roughnessMap: 'textures/PavingStones092_1K_Roughness.jpg',
      aoMap: 'textures/PavingStones092_1K_AmbientOcclusion.jpg',
    };
  }
}

const textureLibrary = new TextureLibrary();

export default textureLibrary;
