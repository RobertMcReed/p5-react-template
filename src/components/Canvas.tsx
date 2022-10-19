import React from "react";
import Sketch from "react-p5";
import { Canvas } from "controller/animations";

interface CanvasProps {
  canvas: Canvas;
}

const CanvasComponent: React.FC<CanvasProps> = ({ canvas }) => {
  // using a random key will cause a new canvas to render when changes are detected
  return <Sketch key={canvas.key} setup={canvas.setup} draw={canvas.draw} />;
};

export default CanvasComponent;
