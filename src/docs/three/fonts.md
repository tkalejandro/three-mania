# Fonts
In this project, we aim to avoid hardcoded strings and facilitate the reuse of fonts for a more maintainable codebase.

## Adding new fonts
To add a new font, navigate to the public `public/fonts` folder and add the new font. Ensure that you are using a valid font format, and we recommend using widely supported formats like ttf or json (for 3D Text). Keep in mind the file size, and consider using compressed formats for optimal performance. 

## Font library helper
All Fonts should be reusable, and thus, they need to be added to the `fontLibrary` inside the helpers folder. This helper initializes a font and makes it easy to find when needed. It also ensures code safety, as developers won't need to change the path every time a new font is used. If the font path changes for any reason, it only needs to be updated in one place.

Please take in count, to name as the original file the function.

For example:

- Arial_Bold.ttf --> arialBold()
- Arial_Italic.json --> _3DArialItalic()

## Example using a font
Here's a dummy use of a font. Adapt it to your specific circumstances:

```
import { fontLibrary } from '@/helpers';
...

const DisplaySomeText = () => {
  // Example usage in React component
  <Text
        font={fontLibrary.montserratSemiBold()}
        ...
      >

    // or 3D Text
     <Text3D font={fontLibrary._3DTextMontserratBold()}>
        Hello World
      </Text3D>
};
```

## Facefont

If you would like to transform a font to 3D text, you might need to do the conversion in Facefont.
Please visit this site for more info. Remember you will need a json file at the end.

- https://gero3.github.io/facetype.js/

## More links

-  https://threejs.org/docs/index.html?q=textg#examples/en/geometries/TextGeometry
-  https://codesandbox.io/p/sandbox/text3d-alignment-x6obrb?file=%2Fsrc%2FApp.js
