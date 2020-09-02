import React, { useState, useEffect } from "react";

export const PlusFeedButton = ({ plusCurrentFeed }) => {
  return (
    <div
      className="plus-button"
      style={{
        border: "1px solid black",
        position: "absolute",
        bottom: "0",
        padding: "20px",
        borderRadius: "50%",
      }}
      onClick={plusCurrentFeed}
    >
      +1
    </div>
  );
};
