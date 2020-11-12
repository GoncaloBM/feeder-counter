import React,{useState,useContext} from "react";
import axios from 'axios';
import "./ManualFeedScreen.css";
import { CloseButton } from "../../../buttons/CloseButton";
import { OkButton } from "../../../buttons/OkButton";
import { ManualTime } from "./ManualTime";
import { url } from '../../../../url';
import SettingsContext from '../../../../SettingContext';

export const ManualFeedScreen = ({
  setInsertManual,date, fetchFeeders
}) => {

  const [time, setTime] = useState({});
  const { settings } = useContext(SettingsContext);
  const [stateSettings, setStateSettings] = settings;

  const plusFeed = () => {
    const newFeed = {
      year: date[0],
      month: date[1]-1,
      day: date[2],
      hour: time.hours,
      minutes: time.minutes,
      mamadas: 1,
      breast: "",
      page: "past",
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
        setInsertManual(false);
      });
  };
  return (
    <div className="manual-feed-screen">
      <CloseButton buttonEffect={setInsertManual} />
      <ManualTime setTime={setTime} time={time}/>
      <OkButton buttonEffect={plusFeed} buttonText="New Feed" />
    </div>
  );
};
