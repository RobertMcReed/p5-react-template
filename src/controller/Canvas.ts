import p5Types from "p5";
import { CanvasBase, ICanvasBase, ICanvasBaseArgs } from "./CanvasBase";

// if you need any public properties add them here
export interface ICanvas extends ICanvasBase {}

// add any additional args here
export interface ICanvasArgs extends ICanvasBaseArgs {}

export class Canvas extends CanvasBase implements ICanvas {
  // is you need a constructor make sure to call super with the args
  // if you don't add any extra args you can omit the constructor
  // constructor(args: ICanvasArgs) {
  //   super(args);
  //   this.something = args.something;
  // }

  // if you don't need to add canvas events you can omit this function entirely and it will be inherited
  // if you do create a setup function you must call this.init(p5, canvasParentRef) in order to initialize the canvas
  // setup = (p5: p5Types, canvasParentRef: Element) => {
  //   const canvas: p5Types.Element = this.init(p5, canvasParentRef);
  //   canvas.mouseMoved((event) => {
  //     console.log(event);
  //   });
  // };

  // remove the demo and create your own animation!
  draw = (p5: p5Types) => {
    this.demo(p5);
  };
}

// use this canvas in order for changes to hot reload
export const hotCanvas = new Canvas();
