import React, { useState } from "react";
import Calendar from "react-calendar";
import "./App.css";

function App() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="App">
      <div classname="calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
}

export default App;
