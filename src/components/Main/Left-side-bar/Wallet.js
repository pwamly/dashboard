import React from "react";
import Buttons from "./Buttons";
import Rowone from "./Rowone";
import wave from "../../../assets/awave.png";
function Wallet() {
  return (
    <div className="wallet">
      <Rowone mode={{ url: wave, text: "Training wallet" }} />
      <div className="wrowtwo"> Trading </div>
      <div className="wrowthree">
        <div className="Ttext"> $ 34, 752.00 </div>
        <div className="Tbtn">
          <Buttons mode={{ text: "TOP UP" }} />
        </div>
      </div>
      <div className="wrowfour"> Holding </div>
      <div className="wrowfive">
        <div className="holdingv"> $ 4, 102.00 </div>
        <div className="buybtn">
          <Buttons mode={{ text: "BUY DAI" }} />
        </div>
      </div>
    </div>
  );
}

export default Wallet;
