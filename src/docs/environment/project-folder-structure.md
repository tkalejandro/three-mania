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

Here you will find all explanations related to `/public` folder.

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

## Src Folder

Here you will find all explanations related to `/src` folder.

### App

App folder is a special forder from NextJS 14. This is how the routing of the project happens and is considered as a backend environment. To get more information you could visit here: [NextJS App router documentation](https://nextjs.org/docs).

However the important here to know this folder is full of special files.

```
page.tsx --> at the root is actually "/"

myFolder
    page.tsx --> is a new page called "/myFolder"

layout.tsx --> Is a layout wrapper
providers.tsx --> Is a wrapper to add providers.

favicon.ico --> favicon
apple-icon.png --> favicon for apple
icon.png --> icon

```

### Components

All UI components that can be use across the project. However, its mostly use for UI that belongs inside the `src/app` folder. We dont do it directly app folder, to not confuse with the special files.

### constants

As we explained is a collection of objects with information that never change. Could be the info of a company, a person, or country information. For example your data could be a constant.

When you create a new file, make sure you export it as default and later add it in the `index.ts` file.

```
...
export { default as soniaCoronado } from './soniaCoronado';
...
```

### Docs

This are all MD files that are use for the DocApp. The important here to know is that only the `.md` files will be read. This section is possible because we are using the ability of Backend from NextJS, that allow us to read files and folders from the project.

Take in count that you can create new folders as categories or subcategories. The navigiation will be automatically created. If you think there is a style that is off, this could be change in the `StyledMarkdown/ui` components.

### Enums

Enums in TypeScript provide a way to define a set of named constant values. This enhances code readability and maintainability by giving meaningful names to these values.

```
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday
}

const today: Days = Days.Wednesday; // or any other day that we assign in the enum.
```

Make sure you export the enums in the category they belong as a `export const MyEnum {...}`

### Helpers

In this folder you will find many code that help us in the reusability. As you might know, in this project there are a lot of hardcoded strings , like linking an image, music, textures, etc. Therefore we created this helpers to make it very easy to use. We recommend to read the guide of each audiolibraries.

You can create more helpers, if you feel a code is been repeated a lot, there is a high chance that could be a helper. The base of this helpers is using Class methods.

Make sure the new helper is added in the `index.ts` file.

```
...
export { default as audioLibrary } from './audioLibrary';
export { default as textureLibrary } from './textureLibrary';
export { default as envMapLibrary } from './envMapLibrary';
export { default as threeHelpers } from './threeHelpers';
export { default as imageLibrary } from './imageLibrary';
export { default as fontLibrary } from './fontLibrary';
...

```

### Hooks

In React, hooks are special functions that help functional components manage state and side effects. They simplify code, promote reusability, and allow for better organization, making it easier to build and maintain components without the need for class components.

At the moment we have the:

- useAppTheme --> this is to get the theme configurations. So we avoud using hardcoded strings
- useAppBreakpoints --> this is to know when is mobile, desktop, etc.

### Modules

The modules is like a department in which each team is responsible. In this project we have 3 departments which are:

- Experience --> it create all pages related to the experience. In this case 2. "/" and "/testExperience"
- DocApp --> all related to DocApp. "/docs"
- StaticPages --> all related to static page that almost never change. In thid case "/resume" and "/developers"

Each team or department are in charge of generating the content that will be display in each route. Therefore each team has the freedom to create pages and also their frontends. 

If you see there a new department to create, you can also create one.

### Store

This is where all global states are created. We have divided them by categories. We should always avoid to have to much data in 1 file, because then it gets complex.

For more information please read the [Zustand Documentation](https://github.com/pmndrs/zustand).

### Theme

Everything related to the theme, styles, colors, spacing etc, goes here.
The important here is you can easily change, delete and add new variables as a theme. This will be automatically recognize in our `useAppTheme` custom hook. Is important to mention is Type safe.

Remember the base is Chakra UI. So it comes in handy you also check the ChakraUI Docs.

[Chakra UI Documentation](https://chakra-ui.com/docs/getting-started)

### Types

In TypeScript, custom types can be created to represent specific shapes of data. This enhances code clarity and ensures that variables adhere to specific structures.

```
export type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

const user: Person = {
  name: "John Doe",
  age: 25,
  isStudent: true
};

```

You will see a lot `interface` . It does almost the same as `Type` is just the stucture is different.

```
export interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}
```

## Why so many Index.ts file?

To streamline imports and enhance code organization, you can create an `index.ts` file in a folder that exports various functionalities. This approach simplifies import statements in other parts of your codebase.

```
// Inside a folder, e.g., "hooks"
export { default as useAppBreakpoints } from './useAppBreakpoints';
export { default as useAppTheme } from './useAppTheme';

```

```
// Now, you can import the exported functionalities in a more concise way
import { useAppBreakpoints, useAppTheme } from './hooks';
```

By consolidating exports in an index.ts file, you create a centralized entry point for a folder, making it easier to manage and import multiple functionalities without writing lengthy import statements.

## Why so many components folder?

In a nut shell, we want to make our components to be local to the component we are created. This way we can have easy access to the components to belong to it. If for some reason we want to reuse a component many times across the page. Then is better choice to have it as global component inside this folder `src/components`

Example how component looks like:

```
HumanComponent
    - HumanComponent.tsx
    - Components
        - UpperBody
            -UpperBody.tsx
        - LowerBody
            - LowerBody.tsx
    - Index.ts //contains component Upper and Lower body.
```













