import React from "react";
import Buttons from "../Left-side-bar/Buttons";

function Filter(params) {
  return (
    <div className="filter">
      <div className="sfilter">
        <div className="stext">
          <input type="text" placeholder="Select assets, types and period:" />
        </div>
        <div className="fbtn">
          <Buttons mode={{ text: "Filter" }} />
        </div>
      </div>

      <div className="units">
        <div className="utext">Units:</div>
        <div className="ubtn">
          <Buttons mode={{ text: "%" }} />
          <Buttons mode={{ text: "$" }} />
        </div>
      </div>
      <div className="tranding">
        <div className="trntext">Sort by</div>
        <div className="select">
          <select name="" id="">
            <option value="">Tranding</option>
          </select>
        </div>
      </div>
    </div>
  );
}
function index() {
  return (
    <div className="vpf">
      <Filter />
    </div>
  );
}

export default index;
