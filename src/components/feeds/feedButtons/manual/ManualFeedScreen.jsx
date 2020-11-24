import React, { useState, useContext } from "react";
import axios from "axios";
import "./ManualFeedScreen.css";
import { CloseButton } from "../../../buttons/CloseButton";
import { OkButton } from "../../../buttons/OkButton";
import { ManualTime } from "./ManualTime";
import { url, development } from "../../../../url";
import { SettingsContext } from "../../../../contexts/SettingsContext";

export const ManualFeedScreen = ({ setInsertManual, date, fetchFeeders }) => {
  const [time, setTime] = useState({});
  const [settings] = useContext(SettingsContext);

  const plusFeed = () => {
    const newFeed = {
      year: date[0],
      month: date[1] - 1,
      day: date[2],
      hour: time.hours,
      minutes: time.minutes,
      mamadas: 1,
      breast: "",
      page: "past",
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
        setInsertManual(false);
      });
  };
  return (
    <div className="manual-feed-screen">
      <CloseButton buttonEffect={setInsertManual} />
      <ManualTime setTime={setTime} time={time} />
      <OkButton buttonEffect={plusFeed} buttonText="New Feed" />
    </div>
  );
};
