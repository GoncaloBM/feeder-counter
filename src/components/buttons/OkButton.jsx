import React from "react";
import "./OkButton.css";

export const OkButton = ({ buttonEffect, buttonText }) => {
  return (
    <div className="ok-button" onClick={() => buttonEffect()}>
      {buttonText}
    </div>
  );
};
