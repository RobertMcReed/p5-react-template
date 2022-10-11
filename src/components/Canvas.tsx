import React from "react";
import Sketch from "react-p5";
import { Canvas } from "controller/Canvas";

interface CanvasProps {
  canvas: Canvas;
}

const CanvasComponent: React.FC<CanvasProps> = ({ canvas }) => {
  return <Sketch setup={canvas.setup} draw={canvas.draw} />;
};

export default CanvasComponent;
