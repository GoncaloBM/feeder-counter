import React, { useState } from "react";

export const Save = ({ postFeeders }) => {
  return (
    <div
      className="save-button"
      style={{
        position: "absolute",
        bottom: "0",
        right: "0",
        border: "1px solid black",
      }}
      onClick={postFeeders}
    >
      Send Feeds
    </div>
  );
};
