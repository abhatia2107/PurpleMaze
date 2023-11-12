import React from "react";
import "./UpgradeNow.css";
function FreeTrialInfo(props) {
  return (
    <div className="flex flex-col items-center free-trial-box px-5 py-2 mx-auto ">
      <h2 className="text-heading">You are on a free trial right now</h2>
      <p className="para">We are showing limited ads to you right now.</p>
      <p className="para">Please upgrade for more ads.</p>
      <button onClick={props.onUpgradeClick}>Upgrade</button>
    </div>
  );
}

export default FreeTrialInfo;
