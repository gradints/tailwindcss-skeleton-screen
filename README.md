# tailwindcss-skeleton-screen

Tailwindcss plugin to make skeleton screen easier than ever.

[![npm (scoped)](https://img.shields.io/npm/v/@gradin/tailwindcss-skeleton-screen)](https://www.npmjs.com/package/@gradin/tailwindcss-skeleton-screen)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@gradin/tailwindcss-skeleton-screen)
![npm](https://img.shields.io/npm/dw/@gradin/tailwindcss-skeleton-screen)

[Live Demo](https://play.tailwindcss.com/dcAoaNpFYu)

## Installation

```sh
# Using npm
npm install -D @gradin/tailwindcss-skeleton-screen

# Using Yarn
yarn add -D @gradin/tailwindcss-skeleton-screen
```

Then add the plugin to `tailwind.config.js` file

```js
module.exports = {
  theme: {
    // ...
  },

  plugins: [
    require('@gradin/tailwindcss-skeleton-screen'),
  ],

}
```

## Configuration

You can change the color and animation via `theme` settings.

The object keys will be appended to the end of the `.loading` class.
The base `.loading` class can be configured by `DEFAULT` key.

```js
module.exports = {
  theme: {
    skeletonScreen: {
      DEFAULT: { // .loading
        baseColor: '#c7c7c7',
        movingColor: 'linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%)',
        duration: '1s',
        timing: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      // specify another color to have multiple loading colors.
      blue: { // .loading-blue
        baseColor: 'blue',
        movingColor: 'linear-gradient(to right, transparent 0%, lightblue 50%, transparent 100%)',
        duration: '.3s',
        timing: 'ease',
      },
    },
  },
}
```

Or you can use `theme.extend` to add another color in addition to the default.

```js
module.exports = {
  theme: {
    extend: {
      skeletonScreen: {
        red: { // .loading-red
          baseColor: 'red',
          movingColor: 'pink',
          duration: '3s',
          timing: 'ease',
        },
      },
    },
  },
}
```

If you want to use colors from your theme. You can do it like this. Learn more about this [here](https://tailwindcss.com/docs/theme#referencing-other-values).

```js
module.exports = {
  theme: {
    skeletonScreen: theme => ({
      DEFAULT: {
        baseColor: theme('colors.gray.300'),
        movingColor: 'linear-gradient(to right, transparent 0%, ' + theme('colors.gray.50') + ' 50%, transparent 100%)',
        duration: '1s',
        timing: 'ease',
      },
    }),
  },
}
```