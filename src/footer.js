import React, { useState } from "react";

export default function Toggle() {
  const [color, setDarkMode] = useState();
  const divStyle = {backgroundColor: color};
  return (
    <div style={divStyle}>
      <p>Dark mode is currently: {color}</p>
      <button onClick={() => setDarkMode("black")}>On</button>
      <button onClick={() => setDarkMode("white")}>Off</button>
    </div>
  );
}