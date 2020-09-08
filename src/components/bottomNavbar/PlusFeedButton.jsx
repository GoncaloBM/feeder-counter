import React, { useState, useEffect } from "react";
import './PlusFeedButton.css'

export const PlusFeedButton = ({ plusCurrentFeed,plusButton }) => {
  return (
    <div className="plus-button" onClick={plusButton}>
      +1
    </div>
  );
};
