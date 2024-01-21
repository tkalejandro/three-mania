import EnvMapsCoordinates from '@/types/ExperienceTypes/EnvMapsCoordinates';
import { Camera, Frustum, Matrix4, Mesh } from 'three';

/**
 * Helpers related to the experience
 * Do you have a cool function?
 * Share it to the world.
 */
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

  /**
   * Helper that detects if a mesh is visible inside the camera.
   * Is very heavy in performance use with caution.
   * @param object
   * @param camera
   * @returns
   */
  isObjectInFrustum = (object: Mesh, camera: Camera) => {
    const matrix = new Matrix4();
    const frustum = new Frustum();

    // Update the camera's matrixWorldInverse to ensure it's up-to-date
    camera.updateMatrixWorld();

    // Use invert instead of getInverse (deprecated)
    camera.matrixWorldInverse.copy(camera.matrixWorld).invert();

    // Apply the object's matrixWorld to the frustum
    matrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(matrix);

    // Check if the object's bounding box is within the frustum
    return frustum.intersectsObject(object);
  };
}

const threeHelpers = new ThreeHelpers();

export default threeHelpers;
