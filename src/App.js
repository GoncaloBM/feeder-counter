import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { formatDate } from "./formatDate";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import { Feeds } from "./components/Feeds";
import { PlusFeedButton } from "./components/PlusFeedButton";
import { TimePicker } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import { ManualFeed } from "./components/ManualFeed";

function App() {
  const [value, onChange] = useState(new Date());
  const [dateFormated, setDateFormated] = useState("");
  const [feeds, setFeeds] = useState([]);
  const [time, setTime] = useState({});

  const formatDat = () => {
    setDateFormated(formatDate(value));
  };

  const plusCurrentFeed = () => {
    const currentHour = new Date();

    const newFeed = {
      year: currentHour.getFullYear(),
      month: currentHour.getMonth(),
      day: currentHour.getDate(),
      hour: currentHour.getHours(),
      minutes: currentHour.getMinutes(),
    };

    setFeeds([...feeds, newFeed]);
  };

  const plusFeed = () => {
    const newFeed = {
      year: value.getFullYear(),
      month: value.getMonth(),
      day: value.getDate(),
      hour: time.hours,
      minutes: time.minutes,
    };

    setFeeds([...feeds, newFeed]);
  };

  const onChangeTime = (time) => {
    setTime({ hours: time._d.getHours(), minutes: time._d.getMinutes() });
  };

  useEffect(() => {
    formatDat();
  }, [value]);

  return (
    <div className="App">
      <div classname="calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
      <Feeds dateFormated={dateFormated} feeds={feeds} />
      <PlusFeedButton plusCurrentFeed={plusCurrentFeed} />
      <ManualFeed
        onChangeTime={onChangeTime}
        plusFeed={plusFeed}
        value={value}
      />
    </div>
  );
}

export default App;
