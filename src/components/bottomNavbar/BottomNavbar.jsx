import React, { useState } from "react";
import { ManualFeed } from "./ManualFeed";
import { Save } from "./Save";
import "./BottomNavbar.css";
import { PlusFeedButton } from "./PlusFeedButton";

export const BottomNavbar = ({
  onChangeTime,
  plusFeed,
  value,
  postFeeders,
  plusCurrentFeed,
  feedsSent,
  setFeedsSent,
}) => {
  return (
    <div className="bottom-navbar">
      <ManualFeed
        onChangeTime={onChangeTime}
        plusFeed={plusFeed}
        value={value}
      />
      <Save
        postFeeders={postFeeders}
        feedsSent={feedsSent}
        setFeedsSent={setFeedsSent}
      />
      <PlusFeedButton plusCurrentFeed={plusCurrentFeed} />
    </div>
  );
};
