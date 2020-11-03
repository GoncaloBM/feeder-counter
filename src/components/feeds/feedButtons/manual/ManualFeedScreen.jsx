import React from "react";
import "./ManualFeedScreen.css";
import { CloseButton } from "../../../buttons/CloseButton";
import { OkButton } from "../../../buttons/OkButton";
import { ManualTime } from "./ManualTime";

export const ManualFeedScreen = ({
  plusFeed,
  setInsertManual,
  setTime,
  time

}) => {
  return (
    <div className="manual-feed-screen">
      <CloseButton buttonEffect={setInsertManual} />
      <ManualTime setTime={setTime} time={time}/>
      <OkButton buttonEffect={plusFeed} buttonText="New Feed" />
    </div>
  );
};
