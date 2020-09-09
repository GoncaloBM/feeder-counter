import React from "react";
import logo from "../images/logo.png";

export const Title = ({ height, font,borderWeight }) => {
  return (
    <div className="title-line" style={{ height: height }}>
      <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
      <div className="logo-title" style={{ fontSize: font, borderBottom:`${borderWeight}px solid #cabbe9` }}>
        myBaby's Feeds
      </div>
    </div>
  );
};
