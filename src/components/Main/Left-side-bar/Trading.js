import React from "react";
import Buttons from "./Buttons";
import Rowone from "./Rowone";
import graph from "../../../assets/graphone.png";
import wave from "../../../assets/awave.png";

function Time(params) {
  return (
    <div className="hrowone">
      <Buttons mode={{ text: "Last" }} />
      <Buttons mode={{ text: "Day" }} />
      <Buttons mode={{ text: "Week" }} />
      <Buttons mode={{ text: "Month" }} />
      <Buttons mode={{ text: "All" }} />
    </div>
  );
}
function Trading() {
  return (
    <div className="history">
      <Rowone mode={{ url: wave, text: "Trading History " }} />
      <Time />
      <div className="hrowtwo">
        <div className="Ttrade">Total Trade</div>
        <div className="profit">Profit</div>
      </div>
      <div className="hrowthree">
        <div className="Tvalue">245</div>
        <div className="pvalue">+21.5%</div>
      </div>
      <div className="hrowfour">
        <img src={graph} alt="" className="himg" />
      </div>
    </div>
  );
}

export default Trading;
