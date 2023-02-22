import React, { useState, createContext, useContext } from "react";

const ColourContext = createContext();

function ColorPicker() {
  const colours = ["red", "blue", "yellow", "green", "black", "white", "purple"];
  const { setPenColour } = useContext(ColourContext);
  return (
    <div>
      <h1>Choose a color</h1>
      {colours.map((colour) => (
        <button onClick={() => setPenColour(colour)} key={colour} style={{ backgroundColor: colour }} />
      ))}
    </div>
  );
}

function Pixel() {
  const [pixelColour, setPixelColour] = useState("lightGrey");
  const { penColour } = useContext(ColourContext);
  return (
    <div
      onClick={() => setPixelColour(penColour)}
      style={{ height: "20px", width: "20px", backgroundColor: pixelColour, margin: "1px" }}
    />
  );
}

function Pixels() {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", width: "210px", margin: "0 auto" }}>
      {pixels}
    </div>
  );
}

export default function PixelArt() {
  const [penColour, setPenColour] = useState("lightGrey");

  return (
    <ColourContext.Provider value={{ penColour, setPenColour }}>
      <ColorPicker />
      <Pixels />
    </ColourContext.Provider>
  );
}
