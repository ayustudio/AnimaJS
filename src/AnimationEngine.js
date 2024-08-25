import { rafThrottle, lerp } from './utils';
import { Easing } from './Easing';

export default class AnimationEngine {
  constructor(options) {
    this.options = options;
    this.element = options.element;
    this.duration = options.duration;
    this.easing = options.easing || Easing.linear;
    this.properties = options.properties;
    this.onUpdate = options.onUpdate;
    this.onComplete = options.onComplete;
    this.startTime = null;
    this.rafId = null;
  }

  start() {
    this.startTime = performance.now();
    this.update = rafThrottle(this.update.bind(this));
    this.rafId = requestAnimationFrame(this.update);
  }

  update(currentTime) {
    const elapsed = currentTime - this.startTime;
    const progress = Math.min(elapsed / this.duration, 1);
    const easedProgress = this.easing(progress);

    Object.entries(this.properties).forEach(([prop, { from, to }]) => {
      const value = lerp(from, to, easedProgress);
      this.element.style[prop] = `${value}${typeof from === 'number' ? 'px' : ''}`;
    });

    if (this.onUpdate) this.onUpdate(easedProgress);

    if (progress < 1) {
      this.rafId = requestAnimationFrame(this.update);
    } else {
      if (this.onComplete) this.onComplete();
    }
  }

  stop() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}
