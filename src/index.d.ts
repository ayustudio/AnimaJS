declare module 'animajs' {
  // ... (previous interfaces remain the same)

  export interface CSSTransformProperties {
    translate?: { from: [number, number]; to: [number, number] };
    scale?: { from: number; to: number };
    rotate?: { from: number; to: number };
  }

  export interface CSSAnimations {
    transform: (element: HTMLElement, properties: CSSTransformProperties, progress: number) => void;
    color: (element: HTMLElement, property: string, from: string, to: string, progress: number) => void;
    transition: (element: HTMLElement, properties: Record<string, string>, duration: number, easing?: string) => Promise<void>;
    keyframes: (element: HTMLElement, keyframes: Keyframe[], options: KeyframeAnimationOptions) => Animation;
  }

  const AnimaJS: {
    animate: (options: AnimationOptions) => AnimationInstance;
    timeline: () => TimelineInstance;
    cssVariable: (options: CSSVariableOptions) => AnimationInstance;
    responsive: (options: ResponsiveAnimationOptions) => { stop: () => void };
    webAnimation: (options: WebAnimationOptions) => WebAnimationInstance;
    css: CSSAnimations;
    Easing: Record<string, (t: number) => number>;
  };

  export default AnimaJS;
}
