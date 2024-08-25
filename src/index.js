import AnimationEngine from './AnimationEngine';
import Timeline from './Timeline';
import { Easing } from './Easing';
import { animateCSSVariable } from './CSSVariablesSupport';
import { createResponsiveAnimation } from './ResponsiveAnimation';
import { createWebAnimation } from './WebAnimationsIntegration';
import { CSSAnimations } from './CSSAnimations';

const AnimaJS = {
  animate: (options) => new AnimationEngine(options),
  timeline: () => new Timeline(),
  cssVariable: animateCSSVariable,
  responsive: createResponsiveAnimation,
  webAnimation: createWebAnimation,
  css: CSSAnimations,
  Easing
};

export default AnimaJS;

// For backwards compatibility and non-module environments
if (typeof window !== 'undefined') {
  window.AnimaJS = AnimaJS;
}
