import React from "react";
import Rowone from "./Rowone";
function Opentrade() {
  return (
    <div className="opentrade">
      <Rowone />
      <div className="Oprowtwo">
        <div className="inprogress">Trades in progress</div>
        <div className="outcome">Closest outcome</div>
      </div>
      <div className="Oprowthree">
        <div className="inprogressvalue">15</div>
        <div className="outcomevalue">25m 40s</div>
      </div>
      <div className="Oprowfour">ETH 48 hour</div>
    </div>
  );
}

export default Opentrade;
