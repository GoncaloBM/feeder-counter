import React, { useState } from "react";

export const Save = ({ postFeeders }) => {
  return (
    <div
      className="save-button"
      style={{ position: "absolute", top: "60%", border: "1px solid black" }}
      onClick={postFeeders}
    >
      Send Feeds
    </div>
  );
};
