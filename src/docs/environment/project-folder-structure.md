# Project Folder Structure

In this guide we will try to explain in easy words what each folder is doing in this project. We will provide a first handy summary and then in details. 

## Summary 


**Root** - Environment configurations

```
root
    eslintrc.json --> Eslint rules.
    gitignore --> Files that will be ignore by Git.
    prettierignore --> Files that will be ignore by Prettier.
    prettierrc --> Rules for prettier.
    next.config --> NextJS configurations.
    package-lock.json --> Keeps the same version for all users.
    package.json --> Has all package information.
    tsconfig --> Typescript configurations.
```
**Public folder** - Public assets from the project

```
public
    audio --> All audios.
    envMaps -> Environment textures for ThreeJS.
    fonts --> Fonts files, mostly needed for ThreeJS.
    images --> All images.
    models --> All models for ThreeJS.
    textures --> Texture files for ThreeJS.

```

**Src Folder** - Main code

```
src
    app --> App routing special folder from NextJS 14. You can create new pages here. Is always Backend.
    components --> Shared Components that can be use across the project in any level.
    constants --> Information that never change. Ex: Info about a person / company.
    docs --> All MD files to feed the DocApp.
    enums --> All enums used in the project. Is a TS concept.
    helpers --> Functions that assist in repetitive tasks, promotes reusability.
    hooks --> custom react hooks, promotes reusability.
    i18n -->  Multilengual configurations. (Not Yet implemented)
    modules --> All our Frontends. Organize by "departments".
    store --> Global state using Zustand.
    theme --> Theme configurations, colors, spacing, formatting, etc.
    types --> All types used in the project. Is a TS concept.
```

## Public folder

Here you will find all explanations related to public folder.

### Audio

Here you can save all audio and music in any formats. For more information you could have a look in the Audio library helper.

### EnvMaps

Here you can find all environment maps for the Experience (ThreeJS). Normally you will need to create a folder with the name of the enviroment map an then all files. For more information use the environment map library helper.

```
myEnvironmentMapName
    nx.jpg
    ny.jpg
    nz.jpg
    px.jpg
    py.jpg
    pz.jpg
```

### Fonts

Here you can finda all fonts files to be use in React or ThreeJS. The JSON files are usually to make it usable in 3DText. For more information check the Font library helper.

### Images

Here you can find all images that are public to the user. Having images here makes the project slower, different than calling it as a React import. For more information use the image library helper.

### Models

Here you can find all models original file. Usually gltf and glb. Please try to name it in a easy way to find.

### Textures

Here you can find all textures for the ThreeJS. For more information please check the texture library helper. When you create a texture please saive in a folder like this: 

```
pavingStones
    ...
    ambientOcclusiong.png
    color.png
    displacement.png
    normal.png
    ...
```




