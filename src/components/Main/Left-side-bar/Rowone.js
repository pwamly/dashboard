import React from "react";
import greater from "../../../assets/greater.png";

function Rowone({ mode }) {
  const { url, text } = mode;
  return (
    <div className="Oprowone">
      <div className="wave">
        <img src={url} alt="" className="wimg" />
      </div>
      <div className="opentext"> {text} </div>
      <div className="greater">
        <img src={greater} alt="" className="gimg" />
      </div>
    </div>
  );
}

export default Rowone;
