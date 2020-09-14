import React, { useEffect, useState } from "react";
import "./Info.css";

export const Info = ({ feeds, infoPage }) => {
  const [mamadaHour, setMamadaHour] = useState("");
  const [breastToFeed, setBreastToFeed] = useState("");
  const checkNovaMamada = () => {
    const lastMamada = feeds;
    console.log(lastMamada);

    let hoursToSum = 3;
    let mamadaHour = lastMamada.hour;
    let mamadaMinute = lastMamada.minutes;

    while (hoursToSum) {
      mamadaHour++;

      if (mamadaHour === 25) {
        mamadaHour = 0;
      }

      hoursToSum--;
    }

    if (mamadaHour < 10) {
      mamadaHour = "0" + mamadaHour;
    }

    if (mamadaMinute < 10) {
      mamadaMinute = "0" + mamadaMinute;
    }

    setMamadaHour({ hour: mamadaHour, minutes: mamadaMinute });
  };

  const checkBreastToFeed = () => {
    const lastBreastToFeed = feeds.breast;

    if (lastBreastToFeed === "R") {
      setBreastToFeed("L");
    } else if (lastBreastToFeed === "L") {
      setBreastToFeed("R");
    } else {
      return;
    }
  };
  useEffect(
    (infoPage) => {
      checkNovaMamada();
      checkBreastToFeed();
    },
    [infoPage]
  );
  return (
    <div className="info-page">
      <div className="nova-mamada-line">
        <div className="nova-mamada-text">New mamada on</div>
        <div className="nova-mamada-time">
          {mamadaHour.hour} : {mamadaHour.minutes}
        </div>
      </div>
      <div className="breast-feed-line">
        <div className="breast-feed-text">
          {breastToFeed
            ? `Your next breast to feed is ${breastToFeed}`
            : "Please update your last feed"}
        </div>
      </div>
    </div>
  );
};
