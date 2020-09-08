import React from "react";
import logo from "../images/logo.png";

export const Title = ({ height, font }) => {
  return (
    <div className="title-line" style={{ height: height }}>
      <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
      <div className="title" style={{ fontSize: font }}>
        myBaby's Feeds
      </div>
    </div>
  );
};
