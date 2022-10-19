import React from "react";
import Canvas from "components/Canvas";
import { animations } from "controller";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#5f5f8f",
        width: "100vw",
      }}
    >
      <Canvas canvas={animations[0].hotCanvas} />
    </div>
  );
}

export default App;
