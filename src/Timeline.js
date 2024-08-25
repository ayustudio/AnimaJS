export default class Timeline {
  constructor() {
    this.animations = [];
    this.currentTime = 0;
  }

  add(animation, offset = 0) {
    this.animations.push({ animation, offset });
    return this;
  }

  play() {
    this.startTime = performance.now() - this.currentTime;
    this.update();
  }

  update = () => {
    const now = performance.now();
    this.currentTime = now - this.startTime;

    this.animations.forEach(({ animation, offset }) => {
      const relativeTime = this.currentTime - offset;
      if (relativeTime >= 0 && relativeTime <= animation.duration) {
        const progress = relativeTime / animation.duration;
        animation.update(animation.startTime + relativeTime);
      }
    });

    if (this.currentTime < this.getTotalDuration()) {
      requestAnimationFrame(this.update);
    }
  }

  getTotalDuration() {
    return Math.max(...this.animations.map(a => a.offset + a.animation.duration));
  }

  pause() {
    cancelAnimationFrame(this.rafId);
  }

  seek(time) {
    this.currentTime = time;
    this.startTime = performance.now() - time;
  }
}
