import React from "react";
import wave from "../../../assets/awave.png";
import greater from "../../../assets/greater.png";
function Rowone() {
  return (
    <div className="Oprowone">
      <div className="wave">
        <img src={wave} alt="" className="wimg" />
      </div>
      <div className="opentext">Open Trades</div>
      <div className="greater">
        <img src={greater} alt="" className="gimg" />
      </div>
    </div>
  );
}

export default Rowone;
