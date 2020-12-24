import React from "react";
import Divider from "./Divider";
import Opentrade from "./Opentrade";
import Trading from "./Trading";
import Wallet from "./Wallet";

function Index() {
  return (
    <div className="sidebar">
      <Opentrade />
      <Divider />
      <Trading />
      <Divider />
      <Wallet />
    </div>
  );
}

export default Index;
