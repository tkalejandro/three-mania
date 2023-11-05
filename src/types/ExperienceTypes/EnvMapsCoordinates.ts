interface EnvMapsCoordinates {
  /**
   * Negative X face of the environment map
   */
  nx: string;

  /**
   * Negative Y face of the environment map
   */
  ny: string;

  /**
   * Negative Z face of the environment map
   */
  nz: string;

  /**
   * Positive X face of the environment map
   */
  px: string;

  /**
   *  Positive Y face of the environment map
   */
  py: string;

  /**
   * Positive Z face of the environment map
   */
  pz: string;

  // Add an index signature to allow access by string keys
  [key: string]: string;
}

export default EnvMapsCoordinates;
