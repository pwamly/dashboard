import React from "react";
import Line from "./Line";
import Vector from "./Vector";
import Button from "../Buttons";
import { MdSchool, MdStarBorder, MdSearch } from "react-icons/md";
import avatar from "../../assets/avatar.png";
const defaultstyle = { borderRadius: "4px 4px 4px 4px" };

function Mode() {
  return (
    <div className="mode">
      <Button
        mode={{
          text: "Training Mode",
          style: { borderRadius: "4px 0px 0px 4px" },
        }}
      />
      <Button
        mode={{ text: "Live Mode", style: { borderRadius: "0px 4px 4px 0px" } }}
      />
    </div>
  );
}
function Viewbtn(params) {
  return (
    <div className="viewbtn">
      <Button
        mode={{
          text: "Show All",
          style: { ...defaultstyle },
        }}
      />
      <Button
        mode={{
          text: "Crypto",
          style: { ...defaultstyle },
        }}
      />
      <Button
        mode={{
          text: "Commodities",
          style: { ...defaultstyle },
        }}
      />
      <Button
        mode={{
          text: "Stock",
          style: { ...defaultstyle },
        }}
      />
      <Button
        mode={{
          text: "Index",
          style: { ...defaultstyle },
        }}
      />
      <Button
        mode={{
          text: "Currency",
          style: { ...defaultstyle },
        }}
      />
    </div>
  );
}
function Icon() {
  return (
    <div className="icons">
      <MdSearch />
      <MdStarBorder />
      <MdSchool />
    </div>
  );
}
function Avatar(params) {
  return (
    <div className="avatar">
      <img src={avatar} alt="" />
      <div className="notify">
        <div className="text">12</div>
      </div>
    </div>
  );
}
function Index() {
  return (
    <div className="menu-base">
      <Vector />
      <Mode />
      <Viewbtn />
      <Icon />
      <Avatar />
      <Line />
    </div>
  );
}

export default Index;
