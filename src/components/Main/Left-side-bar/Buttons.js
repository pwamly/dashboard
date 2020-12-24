import React from "react";

function Buttons({ mode }) {
  const { text } = mode;
  return (
    <button type="button" className="sbtn">
      {text}
    </button>
  );
}

export default Buttons;
