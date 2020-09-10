import React from "react";
import "./CloseButton.css";

export const CloseButton = ({ buttonEffect }) => {
  return (
    <div className="close-button" onClick={() => buttonEffect(false)}>
      X
    </div>
  );
};
