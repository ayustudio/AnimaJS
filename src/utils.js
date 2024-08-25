export function rafThrottle(callback) {
  let requestId = null;

  return (...args) => {
    if (requestId === null) {
      requestId = requestAnimationFrame(() => {
        callback(...args);
        requestId = null;
      });
    }
  };
}

export function lerp(start, end, t) {
  return start * (1 - t) + end * t;
}

export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
