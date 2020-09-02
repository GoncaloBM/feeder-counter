import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { formatDate } from "./formatDate";
import "react-calendar/dist/Calendar.css";
import "./App.css";
import axios from "axios";
import { Feeds } from "./components/Feeds";
import { PlusFeedButton } from "./components/PlusFeedButton";
import { ManualFeed } from "./components/ManualFeed";

function App() {
  const [fetching, setFetching] = useState(true);
  const [value, onChange] = useState(new Date());
  const [dateFormated, setDateFormated] = useState("");
  const [feeds, setFeeds] = useState([]);
  const [time, setTime] = useState({});

  const formatDat = () => {
    setDateFormated(formatDate(value));
  };

  const serverUrl = "http://localhost:3001/baby";

  const fetchFeeders = () => {
    setFetching(true);
    axios.get(serverUrl).then((resp) => {
      console.log(resp);
      setFeeds(resp.data);
      setFetching(false);
    });
  };

  const plusCurrentFeed = () => {
    const currentHour = new Date();

    const newFeed = {
      year: currentHour.getFullYear(),
      month: currentHour.getMonth(),
      day: currentHour.getDate(),
      hour: currentHour.getHours(),
      minutes: currentHour.getMinutes(),
      mamadas: 0,
      breast: "",
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
      mamadas: 0,
      breast: "",
    };

    setFeeds([...feeds, newFeed]);
  };

  const novaMamada = (i, numero) => {
    let newArr = [...feeds];

    if (newArr[i].mamadas + numero < 0) {
      return;
    } else {
      newArr[i].mamadas = newArr[i].mamadas + numero;

      console.log(newArr);
      setFeeds(newArr);
    }
  };

  const onChangeTime = (time) => {
    setTime({ hours: time._d.getHours(), minutes: time._d.getMinutes() });
  };

  useEffect(() => {
    formatDat();

    if (fetching) {
      fetchFeeders();
    }
  }, [value, fetching]);

  return (
    <div className="App">
      <div classname="calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
      <Feeds
        dateFormated={dateFormated}
        feeds={feeds}
        novaMamada={novaMamada}
      />
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
