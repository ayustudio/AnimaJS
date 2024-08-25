# AnimaJS

AnimaJS is a lightweight, high-performance animation library for modern web applications. It provides a simple yet powerful API for creating complex animations with ease.

[![npm version](https://badge.fury.io/js/animajs.svg)](https://badge.fury.io/js/animajs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 High-performance animations with minimal overhead
- 🎨 CSS properties and transforms animation
- 🖼️ SVG animation support
- ⏱️ Advanced timeline for complex animation sequences
- 🔄 CSS Variables integration for dynamic styling
- 📱 Responsive animations with breakpoint support
- 🌐 Web Animations API integration
- 🎛️ Flexible easing functions

## Installation

You can install AnimaJS via npm:

```bash
npm install animajs
```

Or using yarn:

```bash
yarn add animajs
```

## Usage

AnimaJS can be used in various environments. Here are examples for different setups:

### ES Module

```javascript
import AnimaJS from 'animajs';

AnimaJS.animate({
  element: document.querySelector('.my-element'),
  duration: 1000,
  properties: {
    translateX: { from: 0, to: 100 },
    opacity: { from: 0, to: 1 }
  }
}).start();
```

### CommonJS

```javascript
const AnimaJS = require('animajs');

AnimaJS.animate({
  element: document.querySelector('.my-element'),
  duration: 1000,
  properties: {
    translateX: { from: 0, to: 100 },
    opacity: { from: 0, to: 1 }
  }
}).start();
```

### Script Tag

```html
<script src="https://unpkg.com/animajs/dist/animajs.min.js"></script>
<script>
  AnimaJS.animate({
    element: document.querySelector('.my-element'),
    duration: 1000,
    properties: {
      translateX: { from: 0, to: 100 },
      opacity: { from: 0, to: 1 }
    }
  }).start();
</script>
```

## Basic Examples

### Simple Animation

```javascript
AnimaJS.animate({
  element: document.querySelector('.box'),
  duration: 2000,
  properties: {
    translateX: { from: 0, to: 300 },
    rotate: { from: 0, to: 360 }
  },
  easing: AnimaJS.Easing.easeInOutQuad
}).start();
```

### Timeline Animation

```javascript
const timeline = AnimaJS.timeline();

timeline.add(AnimaJS.animate({
  element: document.querySelector('.box1'),
  duration: 1000,
  properties: { translateX: { from: 0, to: 200 } }
}));

timeline.add(AnimaJS.animate({
  element: document.querySelector('.box2'),
  duration: 1000,
  properties: { translateY: { from: 0, to: 200 } }
}), 500); // Starts 500ms after the first animation begins

timeline.play();
```

### CSS Variable Animation

```javascript
AnimaJS.cssVariable({
  element: document.body,
  variable: '--background-hue',
  from: 0,
  to: 360,
  duration: 2000
}).start();
```

## Build Process

AnimaJS uses Webpack for building and bundling. Here are the available npm scripts:

- `npm run build`: Builds the production version of the library
- `npm run build:dev`: Builds the development version with source maps
- `npm start`: Starts the webpack-dev-server for development
- `npm test`: Runs the test suite
- `npm run lint`: Lints the source code

## Browser Compatibility

AnimaJS supports all modern browsers (Chrome, Firefox, Safari, Edge) and IE11+.

## Documentation

For full documentation, visit our [GitHub Wiki](https://github.com/yourusername/animajs/wiki).

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for more details.

## License

AnimaJS is [MIT licensed](LICENSE).
