import AnimationEngine from './AnimationEngine';

export function createResponsiveAnimation(options) {
  const { breakpoints, ...baseOptions } = options;
  let currentAnimation = null;

  function updateAnimation() {
    const width = window.innerWidth;
    let activeBreakpoint = null;

    Object.entries(breakpoints).sort((a, b) => b[0] - a[0]).some(([breakpoint, breakpointOptions]) => {
      if (width >= parseInt(breakpoint)) {
        activeBreakpoint = breakpointOptions;
        return true;
      }
      return false;
    });

    if (currentAnimation) {
      currentAnimation.stop();
    }

    currentAnimation = new AnimationEngine({
      ...baseOptions,
      ...(activeBreakpoint || {})
    });
    currentAnimation.start();
  }

  window.addEventListener('resize', updateAnimation);
  updateAnimation();

  return {
    stop: () => {
      window.removeEventListener('resize', updateAnimation);
      if (currentAnimation) {
        currentAnimation.stop();
      }
    }
  };
}
