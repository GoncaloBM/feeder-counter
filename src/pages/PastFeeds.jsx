import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { Feeds } from "../components/Feeds";
import { ManualFeedScreen } from "../components/bottomNavbar/manualFeed/ManualFeedScreen";

export const PastFeeds = ({
  dateFormated,
  feeds,
  novaMamada,
  changeBreast,
  page,
  onChange,
  value,
  insertManual,
  onChangeTime,
  plusFeed,
}) => {
  return (
    <div className="past-feeds">
      <div classname="calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
      <Feeds
        dateFormated={dateFormated}
        feeds={feeds}
        novaMamada={novaMamada}
        changeBreast={changeBreast}
      />
      {insertManual && (
        <ManualFeedScreen onChangeTime={onChangeTime} plusFeed={plusFeed} />
      )}
    </div>
  );
};
