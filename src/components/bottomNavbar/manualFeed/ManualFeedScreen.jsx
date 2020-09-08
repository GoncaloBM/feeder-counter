import React from "react";
import moment from "moment";
import "antd/dist/antd.css";
import { TimePicker } from "antd";
import "./ManualFeedScreen.css";

const format = "HH:mm";

export const ManualFeedScreen = ({
  onChangeTime,
  plusFeed,
  setInsertManual,
}) => {
  return (
    <div className="manual-feed-screen">
      <div
        className="close-manual-feed-button"
        onClick={() => setInsertManual(false)}
      >
        X
      </div>
      <TimePicker
        ddefaultValue={moment("12:08", format)}
        format={format}
        onChange={onChangeTime}
      />
      <div
        className="send-button"
        style={{ border: "1px solid black" }}
        onClick={plusFeed}
      >
        New Feed
      </div>
    </div>
  );
};
