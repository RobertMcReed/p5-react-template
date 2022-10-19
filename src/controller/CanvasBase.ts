import p5Types from "p5";

interface _ICanvasBase {
  key: number;
  width: number;
  height: number;
  setup: (p5: p5Types, canvasParentRef: Element) => void;
}

export interface ICanvasBase extends _ICanvasBase {
  draw: (p5: p5Types) => void;
}

export interface ICanvasBaseArgs {
  width?: number;
  height?: number;
  hotReloadCanvas?: boolean;
}

export class CanvasBase implements _ICanvasBase {
  key: number;
  width: number;
  height: number;

  constructor(args: ICanvasBaseArgs = { hotReloadCanvas: true }) {
    // using a random key will ensure that the canvas is reset when hot reloading
    this.key = args.hotReloadCanvas ? Math.random() : 1;
    this.width = args.width || 500;
    this.height = args.height || 500;
  }

  setup = (p5: p5Types, canvasParentRef: Element) => {
    this.init(p5, canvasParentRef);
  };

  protected init = (p5: p5Types, canvasParentRef: Element) => {
    const canvas = p5
      .createCanvas(this.width, this.height)
      .parent(canvasParentRef);

    return canvas;
  };

  // an example drawing for inspiration
  protected demo = (p5: p5Types) => {
    p5.strokeWeight(10);
    Array.from({ length: 5 }).forEach((_, idx, arr) => {
      const multiplier = arr.length - idx - 1;
      const x = this.width / 2;
      const y = this.height / 2;
      const width = Math.random() * 5 + 70 * multiplier;
      const height = Math.random() * 5 + 70 * multiplier;
      p5.ellipse(x, y, width, height * 1);
    });
  };
}
