import React, { useState, useEffect } from "react";
import moment from "moment";
import "antd/dist/antd.css";
import { TimePicker } from "antd";

const format = "HH:mm";

export const ManualFeedScreen = 
({ onChangeTime, plusFeed }) => {
  return (
    <div className="manual-feed-screen">
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
