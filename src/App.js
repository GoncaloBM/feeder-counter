import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { formatDate } from "./formatDate";
import "./App.css";

function App() {
  const [value, onChange] = useState(new Date());
  const [dateFormated, setDateFormated] = useState("");

  const formatDat = () => {
    setDateFormated(formatDate(value));
  };

  useEffect(() => {
    formatDat();
  }, [value]);

  return (
    <div className="App">
      <div classname="calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}

export default App;
