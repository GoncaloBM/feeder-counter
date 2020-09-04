import React, { useState, useEffect } from "react";
import { TimePicker } from "antd";
import "./ManualFeed.css";
import moment from "moment";
import "antd/dist/antd.css";
import { ManualFeedScreen } from "./manualFeed/ManualFeedScreen";

export const ManualFeed = ({ onChangeTime, plusFeed }) => {
  const format = "HH:mm";

  const [manual, setManual] = useState(false);

  return (
    <div className="manual-feed">
      <div className="manual" onClick={() => setManual(!manual)}>
        Manual Feed
      </div>
      {manual && (
        <ManualFeedScreen onChangeTime={onChangeTime} plusFeed={plusFeed} />
      )}
    </div>
  );
};
