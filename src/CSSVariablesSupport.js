import AnimationEngine from './AnimationEngine';

export function animateCSSVariable(options) {
  const { element, variable, from, to, ...rest } = options;

  return new AnimationEngine({
    ...rest,
    element,
    properties: {
      [variable]: { from, to }
    },
    onUpdate: (progress) => {
      const value = from + (to - from) * progress;
      element.style.setProperty(variable, value);
    }
  });
}
