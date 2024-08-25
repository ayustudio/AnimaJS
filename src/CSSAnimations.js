import { lerp } from './utils';

export class CSSAnimations {
  static transform(element, properties, progress) {
    const transforms = [];
    
    if (properties.translate) {
      const { from, to } = properties.translate;
      const x = lerp(from[0], to[0], progress);
      const y = lerp(from[1], to[1], progress);
      transforms.push(`translate(${x}px, ${y}px)`);
    }
    
    if (properties.scale) {
      const { from, to } = properties.scale;
      const scale = lerp(from, to, progress);
      transforms.push(`scale(${scale})`);
    }
    
    if (properties.rotate) {
      const { from, to } = properties.rotate;
      const rotation = lerp(from, to, progress);
      transforms.push(`rotate(${rotation}deg)`);
    }
    
    element.style.transform = transforms.join(' ');
  }

  static color(element, property, from, to, progress) {
    const fromRGB = this.hexToRGB(from);
    const toRGB = this.hexToRGB(to);
    
    const r = Math.round(lerp(fromRGB.r, toRGB.r, progress));
    const g = Math.round(lerp(fromRGB.g, toRGB.g, progress));
    const b = Math.round(lerp(fromRGB.b, toRGB.b, progress));
    
    element.style[property] = `rgb(${r}, ${g}, ${b})`;
  }

  static hexToRGB(hex) {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
    
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  static transition(element, properties, duration, easing = 'ease') {
    const transitions = Object.keys(properties).map(prop => 
      `${prop} ${duration}ms ${easing}`
    );
    
    element.style.transition = transitions.join(', ');
    
    Object.entries(properties).forEach(([prop, value]) => {
      element.style[prop] = value;
    });
    
    return new Promise(resolve => {
      const onTransitionEnd = () => {
        element.removeEventListener('transitionend', onTransitionEnd);
        resolve();
      };
      
      element.addEventListener('transitionend', onTransitionEnd);
    });
  }

  static keyframes(element, keyframes, options) {
    return element.animate(keyframes, options);
  }
}
