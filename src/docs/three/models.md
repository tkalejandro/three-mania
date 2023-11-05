# Models

In this project, we are trying to avoid hardcoded strings and configurations and make it easier for other developers to reuse models.

## Adding a new model

To add a new model you need to go the public `public/models` folders and create a new file with the new model.

As a reminder, we are trying to avoid any possible model that has URL to another site, this is to avoid full dependency of a third party.

Now that we have the source, lets dive in how to use it.

## Using a React Model

For this project, we want to make the models easy to use as using any react component.
Therefore we initiate the model inside `src/modules/Experience/models` as a react component.

There are many ways to have a Model. But all should have income is this:

- Easy name: DogModel, ChairModel, etc. Avoid no sense names.
- UseMemo to no need to render again.
- Use preload.
- Pass ...props. To be able to use all properties like any other mesh.

At the end dont forget to add the model inside the `index.ts` file.

```
export { default as GuitarModel } from './GuitarModel';
```

## Where to find Models

Some models can be imported from:
- https://sketchfab.com/tags/threejs
- https://poly.pizza/
- https://blendswap.com/
- https://market.pmnd.rs/

## How to transform a GLTF to a React Component

Just drop your file in this site and copy the result.
- https://gltf.pmnd.rs/