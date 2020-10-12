import React, { useState, useEffect } from "react";

export const ManualTimer = ({
  current,
  timeState,
  setTimeState,
  timeType,
}) => {
  const [time, setTime] = useState(0);

  const newTime = (button) => {
    const currentTime = time;
    const newTime = currentTime + button;

    if (timeType === "hour") {
      if (newTime < 0) {
        setTime(23);
      } else if (newTime > 23) {
        setTime(0);
      } else {
        setTime(newTime);
      }
    }

    if (timeType === "minutes") {
        if (newTime < 0) {
          setTime(59);
        } else if (newTime > 59) {
          setTime(0);
        } else {
          setTime(newTime);
        }
      }
  };

  useEffect(() => {
    if (timeType === "hour") {
      setTimeState({ ...timeState, hours: time });
    } else if (timeType === "minutes") {
      setTimeState({ ...timeState, minutes: time });
    }
  }, [time]);
  return (
    <div className="manual-timer">
      <div
        className="manual-arrow-time"
        onClick={() => newTime(1)}
        style={{ transform: "rotate(90deg)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-left"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#cabbe9"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="15 6 9 12 15 18" />
        </svg>
      </div>
      <div className="manual-timer">{time}</div>
      <div
        className="manual-arrow-time"
        onClick={() => newTime(-1)}
        style={{ transform: "rotate(270deg)" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-chevron-left"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#cabbe9"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="15 6 9 12 15 18" />
        </svg>
      </div>
    </div>
  );
};
