import React from "react";
import { ManualTimer } from "./ManualTimer";

export const ManualTime = ({ setTime, time }) => {
  const currentTime = new Date();
  return (
    <div className="manual-time">
      <ManualTimer
        current={currentTime.getHours()}
        setTimeState={setTime}
        timeState={time}
        timeType={"hour"}
      />
      <div className="manual-points" style={{margin:'1rem'}}>:</div>
      <ManualTimer
        current={currentTime.getMinutes()}
        setTimeState={setTime}
        timeState={time}
        timeType={"minutes"}
      />
    </div>
  );
};
