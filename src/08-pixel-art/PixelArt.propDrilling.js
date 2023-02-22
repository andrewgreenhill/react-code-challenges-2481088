import React, { useState } from "react";

function ColorPicker({ setPenColour }) {
  const colours = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  return (
    <div>
      <h1>Choose a color</h1>
      {colours.map((colour) => (
        <button onClick={() => setPenColour(colour)} key={colour} style={{ backgroundColor: colour }} />
      ))}
    </div>
  );
}

function Pixel({ penColour }) {
  const [backColour, setBackColour] = useState("lightGrey");
  return (
    <div
      onClick={() => setBackColour(penColour)}
      style={{ height: "20px", width: "20px", backgroundColor: backColour, margin: "1px" }}
    />
  );
}

function Pixels({ penColour }) {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} penColour={penColour} />);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", width: "210px", margin: "0 auto" }}>
      {pixels}
    </div>
  );
}

export default function PixelArt() {
  const [penColour, setPenColour] = useState("lightGrey");

  return (
    <>
      <ColorPicker setPenColour={setPenColour} />
      <Pixels penColour={penColour} />
    </>
  );
}
