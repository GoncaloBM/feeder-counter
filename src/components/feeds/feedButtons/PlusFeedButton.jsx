import React, { useContext } from "react";
import axios from "axios";
import { url } from "../../../url";
import SettingsContext from "../../../SettingContext";
import "./PlusFeedButton.css";
import logo from "../../../images/logo.png";

export const PlusFeedButton = ({ fetchFeeders }) => {
  const { settings } = useContext(SettingsContext);
  const [stateSettings, setStateSettings] = settings;

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
      username: stateSettings.user.username,
    };

    axios
      .post(url.getAndPostFeeder.online, newFeed)
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

  return (
    <div className="plus-button" onClick={newFeed}>
      +<div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
    </div>
  );
};
