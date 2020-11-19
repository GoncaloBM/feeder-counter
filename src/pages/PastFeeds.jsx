import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Feeds } from "../components/feeds/Feeds";
import "./pages.css";
import { Title } from "./Title";

export const PastFeeds = ({
  feeds,
  onChange,
  value,
  date,
  page
}) => {
  return (
    <div className="past-feeds">
      <Title height="5vh" font="1.5rem" borderWeight="2" />
      <div className="calendar" style={{ width: "80%" }}>
        <Calendar onChange={onChange} value={value} />
      </div>
      <Feeds
        date={date}
        page={page}
        feeds={feeds}
      />
    </div>
  );
};
