import React from "react";
import moment from "moment";
import "antd/dist/antd.css";
import { TimePicker } from "antd";
import "./ManualFeedScreen.css";
import { CloseButton } from "../../buttons/CloseButton";
import { OkButton } from "../../buttons/OkButton";

const format = "HH:mm";

export const ManualFeedScreen = ({
  onChangeTime,
  plusFeed,
  setInsertManual,
}) => {
  return (
    <div className="manual-feed-screen">
      <CloseButton buttonEffect={setInsertManual} />
      <TimePicker
        ddefaultValue={moment("12:08", format)}
        format={format}
        onChange={onChangeTime}
      />
      <OkButton buttonEffect={plusFeed} buttonText="New Feed" />
    </div>
  );
};
