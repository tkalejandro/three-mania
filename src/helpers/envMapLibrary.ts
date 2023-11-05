import EnvMapsCoordinates from '@/types/ExperienceTypes/EnvMapsCoordinates';
import threeHelpers from './threeHelpers';

/**
 * Library to render fast an EnvMap.
 *
 * Interesting links:
 * - https://www.hdri-hub.com/free-hdri-environments-for-download
 */
class EnvMapLibrary {
  /**
   * Main Env Map
   */
  default(): string[] {
    const coordinates: EnvMapsCoordinates = {
      nx: 'envMaps/default/nx.jpg',
      ny: 'envMaps/default/ny.jpg',
      nz: 'envMaps/default/nz.jpg',
      px: 'envMaps/default/px.jpg',
      py: 'envMaps/default/py.jpg',
      pz: 'envMaps/default/pz.jpg',
    };

    return threeHelpers.safeCoordinates(coordinates);
  }

  /**
   * Sky is on fire HDR Environment.
   */
  skyOnFire(): string {
    return 'envMaps/skyOnFire/the_sky_is_on_fire_2k.hdr';
  }
}

const envMapLibrary = new EnvMapLibrary();

export default envMapLibrary;
