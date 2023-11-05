interface TextureMaps {
  /**
   * The main color texture map
   */
  map: string;
  /**
   * Displacement map (optional)
   */
  displacementMap?: string;
  /**
   *  Normal map (optional)
   */
  normalMap?: string;
  /**
   * Roughness map (optional)
   */
  roughnessMap?: string;
  /**
   * Ambient occlusion map (optional)
   */
  aoMap?: string;

  /**
   * Metalness map (optional)
   */
  metalnessMap?: string;
  /**
   * Specular map (optional)
   */
  specularMap?: string;
  /**
   * Emissive map (optional)
   */
  emissiveMap?: string;
  /**
   *  Opacity map (optional)
   */
  opacityMap?: string;
  /**
   * Cavity map (optional)
   */
  cavityMap?: string;
  /**
   * Subsurface scattering map (optional)
   */
  sssMap?: string;
  /**
   * Translucency map (optional)
   */
  translucencyMap?: string;
  /**
   * Height map (optional)
   */
  heightMap?: string;
  /**
   * Reflection map (optional)
   */
  reflectionMap?: string;
  /**
   * Anisotropy map (optional)
   */
  anisotropyMap?: string;
  /**
   * Sheen map (optional)
   */
  sheenMap?: string;

  // Add more as needed
}

export default TextureMaps;
