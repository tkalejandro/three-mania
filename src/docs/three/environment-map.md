# Environment Map

In this project, we are trying to avoid hardcoded strings and make it easier for other developers to reuse environment maps.

## Adding new environment map

To add a new texture you need to go the public `public/envMaps` folders and create a new folder with the new environment map.
Make sure to provide all files needed to make the environment map work correctly, before been added to the environment map library. Remember, if you are using coordinates, you will need 6 files using the jpg format. 

```
nx.jpg
ny.jpg
nz.jpg
px.jpg
py.jpg
pz.jpg

```

If you are using HDR , it only need 1 file.

## Environment map library helper

All environment map need to be reusable, therefore it needs to be added to the `envMapLibrary` inside the `helpers` folder.
This helper what it does is to initiate a environment map and make it easy to find when needed. Also it make it safe, because the new developer dont need to change the path everytime to use a new environment map. And if the environment map path change for some reason, it only needs to be change once. 

Please take in consideration when returning the files, make sure you use the `safeCoordinates()` to make sure you are not doing any mistake. This will return the correct format.

Aditionally, having this approach, makes it very easy to add the configuration to the mesh.

```
const texture = textureHelpers.brick()

...

<mesh {...texture}  />
```

## CubeMap Generator

Sometimes is very difficult to find Cube Map. Therefore if you would like to generate a cube map you could easiliy use the following:

https://matheowis.github.io/HDRI-to-CubeMap/

## Interesting Links

- AI Generated EnvMaps Collection - https://envmaps.wtlstudio.com/
- Prompt AI Generated EnvMaps - https://skybox.blockadelabs.com/
- HDRI EnvMAps - https://polyhaven.com/hdris
- Paint with AI EnvMaps (windows) - https://www.nvidia.com/en-us/studio/canvas/