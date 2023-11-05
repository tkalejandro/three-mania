# Common Texture Map Combinations

The choice of texture maps that work together in 3D rendering depends on the specific material and shader being used. Different texture maps are often combined to achieve various visual effects. Here are some common combinations of texture maps:

## Basic Material (e.g., PBR)

- `map`: The main color texture map.
- `normalMap`: Normal map for surface detail.
- `roughnessMap`: Roughness map to control surface roughness.
- `metalnessMap`: Metalness map to define which parts are metallic.
- `aoMap`: Ambient occlusion map for shading.

## Displacement/Parallax Mapping

- `map`: The main color texture map.
- `displacementMap`: Used for displacement or parallax mapping to create the illusion of 3D depth.

## Emissive Material (e.g., Glow)

- `map`: The main color texture map.
- `emissiveMap`: Emissive map for self-illumination.

## Transparency and Glass

- `map`: The main color texture map.
- `opacityMap`: Opacity map for controlling transparency.

## Subsurface Scattering (SSS)

- `map`: The main color texture map.
- `sssMap`: Subsurface scattering map to simulate light scattering beneath the surface.

## Anisotropic Materials (e.g., Hair)

- `map`: The main color texture map.
- `anisotropyMap`: Anisotropy map for controlling anisotropic reflections (e.g., for hair or brushed metal).

## Sheen Effect

- `map`: The main color texture map.
- `sheenMap`: Sheen map for creating a sheen effect on materials.

The specific combination of texture maps may vary based on the material and shader being used. It's important to consult the documentation or specifications of your rendering engine or framework to understand how different maps should be used and combined to achieve the desired rendering results.
