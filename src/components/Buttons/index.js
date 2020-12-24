import React from "react";

function index({ mode }) {
  const { text, style } = mode;
  console.log(style);
  return (
    <button type="button" className="btn" style={style}>
      {text}
    </button>
  );
}

export default index;
