import React from "preact/compat";

export default function GameOfLifeCanvas() {
  return (
    <div style={{ display: "flex" }}>
      <canvas
        id="grid"
        width={400}
        height={80}
        style={{ width: "100%", imageRendering: "pixelated", margin: "auto" }}
      ></canvas>

      <script src={"/gameLife.js"}></script>
    </div>
  );
}
