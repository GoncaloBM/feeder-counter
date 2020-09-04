import React, { useState, useEffect } from "react";
import './PlusFeedButton.css'

export const PlusFeedButton = ({ plusCurrentFeed }) => {
  return (
    <div className="plus-button" onClick={plusCurrentFeed}>
      +1
    </div>
  );
};
