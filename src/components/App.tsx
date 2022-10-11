import React from "react";
import Canvas from "components/Canvas";
import { hotCanvas } from "controller/Canvas";

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
      <Canvas canvas={hotCanvas} />
    </div>
  );
}

export default App;
