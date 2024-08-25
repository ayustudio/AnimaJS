# AnimaJS

AnimaJS is a lightweight, high-performance animation library for modern web applications. Inspired by popular libraries like Anime.js, AnimaJS offers a streamlined API with powerful features and optimized performance.

[![npm version](https://badge.fury.io/js/animajs.svg)](https://badge.fury.io/js/animajs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [ES Module](#es-module)
  - [CommonJS](#commonjs)
  - [Script Tag](#script-tag)
- [Basic Examples](#basic-examples)
  - [Simple Animation](#simple-animation)
  - [Timeline Animation](#timeline-animation)
  - [CSS Variable Animation](#css-variable-animation)
  - [Responsive Animation](#responsive-animation)
  - [Web Animations API](#web-animations-api)
- [API Reference](#api-reference)
  - [AnimaJS.animate(options)](#animajsanimateoptions)
  - [AnimaJS.timeline()](#animajstimeline)
  - [AnimaJS.cssVariable(options)](#animajscssvariableoptions)
  - [AnimaJS.responsive(options)](#animajsresponsiveoptions)
  - [AnimaJS.webAnimation(options)](#animajswebanimationoptions)
  - [AnimaJS.css](#animajscss)
  - [AnimaJS.Easing](#animajseasing)
- [Build Process](#build-process)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)
- [License](#license)

## Features

- 🚀 High-performance animations with minimal overhead
- 🎨 CSS properties and transforms animation
- 🖼️ SVG animation support
- ⏱️ Advanced timeline for complex animation sequences
- 🔄 CSS Variables integration for dynamic styling
- 📱 Responsive animations with breakpoint support
- 🌐 Web Animations API integration
- 🎛️ Flexible easing functions
- 🧩 Extensible plugin system

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

### Responsive Animation

```javascript
AnimaJS.responsive({
  element: document.querySelector('.box'),
  duration: 1000,
  properties: { width: { from: 100, to: 300 } },
  breakpoints: {
    '768': { properties: { width: { from: 100, to: 200 } } },
    '1024': { properties: { width: { from: 100, to: 400 } } }
  }
});
```

### Web Animations API

```javascript
const animation = AnimaJS.webAnimation({
  element: document.querySelector('.box'),
  keyframes: [
    { transform: 'translateX(0px)' },
    { transform: 'translateX(300px)' }
  ],
  timing: {
    duration: 1000,
    easing: 'ease-in-out',
    iterations: Infinity
  }
});

animation.play();
```

## API Reference

### AnimaJS.animate(options)

Creates a new animation instance.

- `options.element`: The DOM element to animate
- `options.duration`: Duration of the animation in milliseconds
- `options.properties`: An object defining the properties to animate
- `options.easing`: Easing function (default: linear)
- `options.onUpdate`: Callback function called on each animation frame
- `options.onComplete`: Callback function called when animation completes

### AnimaJS.timeline()

Creates a new timeline for sequencing animations.

Methods:
- `add(animation, offset)`: Adds an animation to the timeline
- `play()`: Starts playing the timeline
- `pause()`: Pauses the timeline
- `seek(time)`: Seeks to a specific time in the timeline

### AnimaJS.cssVariable(options)

Animates a CSS custom property.

- `options.element`: The element to apply the CSS variable to
- `options.variable`: The name of the CSS variable
- `options.from`: The starting value
- `options.to`: The ending value
- `options.duration`: Duration of the animation in milliseconds

### AnimaJS.responsive(options)

Creates a responsive animation that adapts to different breakpoints.

- `options.element`: The element to animate
- `options.duration`: Default duration of the animation
- `options.properties`: Default properties to animate
- `options.breakpoints`: An object defining different animation properties for various screen widths

### AnimaJS.webAnimation(options)

Creates an animation using the Web Animations API.

- `options.element`: The element to animate
- `options.keyframes`: An array of keyframe objects
- `options.timing`: Timing options for the animation

### AnimaJS.css

A collection of CSS-specific animation utilities.

Methods:
- `transform(element, properties, progress)`: Applies CSS transforms
- `color(element, property, from, to, progress)`: Animates color properties
- `transition(element, properties, duration, easing)`: Creates CSS transitions
- `keyframes(element, keyframes, options)`: Creates keyframe animations

### AnimaJS.Easing

An object containing various easing functions:

- `linear`
- `easeInQuad`, `easeOutQuad`, `easeInOutQuad`
- `easeInCubic`, `easeOutCubic`, `easeInOutCubic`
- `easeInQuart`, `easeOutQuart`, `easeInOutQuart`
- `easeInQuint`, `easeOutQuint`, `easeInOutQuint`
- `easeInSine`, `easeOutSine`, `easeInOutSine`
- `easeInExpo`, `easeOutExpo`, `easeInOutExpo`
- `easeInCirc`, `easeOutCirc`, `easeInOutCirc`
- `easeInElastic`, `easeOutElastic`, `easeInOutElastic`

## Build Process

AnimaJS uses Webpack for building and bundling. Here are the available npm scripts:

- `npm run build`: Builds the production version of the library
- `npm run build:dev`: Builds the development version with source maps
- `npm start`: Starts the webpack-dev-server for development
- `npm test`: Runs the test suite
- `npm run lint`: Lints the source code

## Browser Compatibility

AnimaJS supports all modern browsers (Chrome, Firefox, Safari, Edge) and IE11+.

## Contributing

We welcome contributions to AnimaJS! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

Please make sure to update tests as appropriate and adhere to the existing coding style.

## License

AnimaJS is [MIT licensed](LICENSE).
