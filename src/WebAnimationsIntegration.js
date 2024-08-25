export function createWebAnimation(options) {
  const { element, keyframes, timing } = options;

  const animation = element.animate(keyframes, timing);

  return {
    play: () => animation.play(),
    pause: () => animation.pause(),
    reverse: () => animation.reverse(),
    finish: () => animation.finish(),
    cancel: () => animation.cancel(),
    setPlaybackRate: (rate) => { animation.playbackRate = rate; }
  };
}
