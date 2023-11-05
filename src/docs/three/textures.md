# Textures

In this project, we are trying to avoid hardcoded strings and make it easier for other developers to reuse textures.

## Adding new textures

To add a new texture you need to go the public `public/textures` folders and create a new folder with the new texture.
Make sure to provide all files needed to make the texture work correctly, before been added to the texture library.

## Texture library helper

All textures need to be reusable, therefore it needs to be added to the `textureLibrary` inside the `helpers` folder.
This helper what it does is to initiate a texture and make it easy to find when needed. Also it make it safe, because the new developer dont need to change the path everytime to use a new texture. And if the texture path change for some reason, it only needs to be change once. 

Aditionally, having the configuration of the texture, its very easy to added to a mesh.

```
const texture = textureHelpers.brick()

...

<mesh {...texture}  />
```
