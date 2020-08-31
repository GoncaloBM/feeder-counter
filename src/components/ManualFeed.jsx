import React, { useState, useEffect } from "react";
import { TimePicker } from "antd";
import moment from "moment";
import "antd/dist/antd.css";

export const ManualFeed = ({ onChangeTime, plusFeed, value }) => {
  const format = "HH:mm";

  const [manual, setManual] = useState(false);

  return (
    <div
      className="manual-feed"
      style={{
        position: "absolute",
        bottom: "15%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="manual" onClick={() => setManual(!manual)}>
        Manual Feed
      </div>
      {manual && (
        <>
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
        </>
      )}
    </div>
  );
};
