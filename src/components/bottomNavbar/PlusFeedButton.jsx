import React from "react";
import "./PlusFeedButton.css";
import logo from "../../images/logo.png";

export const PlusFeedButton = ({ plusButton }) => {
  return (
    <div className="plus-button" onClick={plusButton}>
      +<div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
    </div>
  );
};
