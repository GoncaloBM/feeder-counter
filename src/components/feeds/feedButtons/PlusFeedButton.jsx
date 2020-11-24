import React, { useContext, useState } from "react";
import axios from "axios";
import { url, development } from "../../../url";
import { SettingsContext } from "../../../contexts/SettingsContext";
import "./PlusFeedButton.css";
import logo from "../../../images/logo.png";
import { ManualFeedScreen } from "./manual/ManualFeedScreen";

export const PlusFeedButton = ({ fetchFeeders, page, feeds, date }) => {
  const [settings] = useContext(SettingsContext);
  const [insertManual, setInsertManual] = useState(false);

  const newFeed = () => {
    const currentHour = new Date();
    const newFeed = {
      year: currentHour.getFullYear(),
      month: currentHour.getMonth(),
      day: currentHour.getDate(),
      hour: currentHour.getHours(),
      minutes: currentHour.getMinutes(),
      mamadas: 1,
      breast: "",
      username: settings.user.username,
    };

    const { server, online } = url.getAndPostFeeder;

    axios
      .post(development ? server : online, newFeed)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        fetchFeeders();
      });
  };

  const plusButton = () => {
    if (page === "home") {
      plusCurrentFeed();
    } else if (page === "pastFeed") {
      setInsertManual(!insertManual);
    }
  };

  const plusCurrentFeed = () => {
    const currentHour = new Date();
    let currentFeed = feeds;
    const lastFeedIndex = currentFeed.length - 1;

    if (currentFeed.length > 0) {
      const sameHour =
        (currentHour.getHours() === currentFeed[lastFeedIndex].hour &&
          currentHour.getMinutes() > currentFeed[lastFeedIndex].minutes) ||
        (currentHour.getHours() === currentFeed[lastFeedIndex].hour &&
          currentHour.getMinutes() === currentFeed[lastFeedIndex].minutes) ||
        (currentHour.getHours() ===
          currentFeed[lastFeedIndex].hour +
            settings.myBaby.breastFeeding.sameBreastHour &&
          currentHour.getMinutes() < currentFeed[lastFeedIndex].minutes);

      // console.log(currentFeed[currentFeed.length-1].hour)
      if (sameHour) {
        // novaMamada(feeds[lastFeedIndex].id, 1);
        newFeed();
      } else {
        newFeed();
      }
    } else {
      newFeed();
    }
  };

  return (
    <>
      <div className="plus-button" onClick={plusButton}>
        +
        <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
      </div>
      {insertManual && (
        <ManualFeedScreen
          date={date}
          fetchFeeders={fetchFeeders}
          setInsertManual={setInsertManual}
        />
      )}
    </>
  );
};
