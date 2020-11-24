import React, { useEffect, useState, useContext } from "react";
import "./Info.css";
import { SettingsContext } from "../contexts/SettingsContext";
import { FeedsContext } from "../contexts/FeedsContext";
import { text } from "../components/texts";

export const Info = ({ infoPage }) => {
  const [mamadaHour, setMamadaHour] = useState("");
  const [breastToFeed, setBreastToFeed] = useState("");
  const [settings] = useContext(SettingsContext);
  const [feeds] = useContext(FeedsContext);

  const feed = feeds[feeds.length - 1];

  const checkNovaMamada = () => {
    const lastMamada = feed;
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
    const lastBreastToFeed = feed.breast;

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
        <div className="nova-mamada-text">
          {text.info.newMamada[`${settings.about.language}`]}
        </div>
        <div className="nova-mamada-time">
          {mamadaHour.hour} : {mamadaHour.minutes}
        </div>
      </div>
      <div className="breast-feed-line">
        <div className="breast-feed-text">
          {breastToFeed
            ? `${
                text.info.nextMama[`${settings.about.language}`]
              }${breastToFeed}`
            : text.info.updateMama[`${settings.about.language}`]}
        </div>
      </div>
    </div>
  );
};
