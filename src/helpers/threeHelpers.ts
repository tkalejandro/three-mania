import EnvMapsCoordinates from '@/types/ExperienceTypes/EnvMapsCoordinates';

class ThreeHelpers {
  /**
   * Helper that checks, that all coordinates are correct and in the correct format.
   * @param coor
   * @returns
   */
  safeCoordinates = (coor: EnvMapsCoordinates): string[] => {
    for (const key of Object.keys(coor)) {
      const expectedFileName = `${key}.jpg`;

      if (!coor[key].endsWith(expectedFileName)) {
        throw new Error(
          `File name for '${key}' does not match expected pattern: '${expectedFileName}'`,
        );
      }
    }

    return [coor.px, coor.nx, coor.py, coor.ny, coor.pz, coor.nz];
  };
}

const threeHelpers = new ThreeHelpers();

export default threeHelpers;
