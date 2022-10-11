import p5Types from "p5";

export interface ICanvas {
  width: number;
  height: number;
  setup: (p5: p5Types, canvasParentRef: Element) => void;
  draw: (p5: p5Types) => void;
}

export class Canvas implements ICanvas {
  width: number;
  height: number;

  constructor(width: number | undefined, height: number | undefined) {
    this.width = width || 500;
    this.height = height || 500;
  }

  setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(this.width, this.height).parent(canvasParentRef);
  };

  // example draw function should be changed
  draw = (p5: p5Types) => {
    p5.background(0);
    p5.strokeWeight(10);
    Array.from({ length: 15 }).forEach((_, idx, arr) => {
      const multiplier = arr.length - idx - 1;
      const x = this.width / 2;
      const y = this.height / 2;
      const width = Math.random() * 5 + 70 * multiplier;
      const height = Math.random() * 5 + 70 * multiplier;
      p5.ellipse(x, y, width, height);
    });
  };
}

// use this canvas in order for changes to hot reload
export const hotCanvas = new Canvas(500, 500);
