import React from "react";
import star from "../../../assets/cards/Star.png";
import pegion from "../../../assets/cards/pegion.png";
import vgraph from "../../../assets/cards/vgraph.png";
import hgraph from "../../../assets/cards/hgraph.png";
import {
  MdChatBubbleOutline,
  MdTrendingUp,
  MdDetails,
  MdCrop169,
} from "react-icons/md";

function Card() {
  return (
    <div className="wrapper">
      <div className="cards">
        <div className="colone">
          <div className="rowone">
            <div className="cimg">
              <img className="cstar" src={star} alt="" />
            </div>
            <div className="ctext">ETH 48 hours</div>
          </div>
          <div className="rowtwo">Crypto</div>
        </div>
        <div className="coltwo">
          <div className="c2rowone">
            <div className="c2img">
              <img className="pegion" src={pegion} alt="" />
            </div>
            <div className="c2text">2,2x</div>
          </div>
          <div className="c2rowtwo">Outcome in 6h 41m</div>
        </div>
        <div className="colthree">
          <div className="c3img">
            <img className="hgraph" src={hgraph} alt="" />
          </div>
        </div>
        <div className="colfour">
          <img className="vimage" src={vgraph} alt="" />
        </div>
        <div className="colfive">
          <div className="c4rowone">$ 34,346.00</div>
          <div className="c4rowtwo">Total commitment funds</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
