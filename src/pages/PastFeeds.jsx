import React from "react";
import Calendar from "react-calendar";
import { Feeds } from "../components/Feeds";
import { ManualFeedScreen } from "../components/bottomNavbar/manualFeed/ManualFeedScreen";
import "./pages.css";
import { CSSTransition } from "react-transition-group";

export const PastFeeds = ({
  dateFormated,
  feeds,
  novaMamada,
  changeBreast,
  onChange,
  value,
  insertManual,
  onChangeTime,
  plusFeed,
  deleteFeed,
  setInsertManual,
  mamadasNumber,
}) => {
  return (
    <div className="past-feeds">
      <div className="app-title" style={{ fontSize: "1.5rem" }}>
        myBaby's Feeds
      </div>
      <div classname="calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
      <Feeds
        dateFormated={dateFormated}
        feeds={feeds}
        novaMamada={novaMamada}
        changeBreast={changeBreast}
        deleteFeed={deleteFeed}
      />
      <CSSTransition
        in={insertManual}
        timeout={300}
        classNames="feed-transition"
        unmountOnExit
      >
        <ManualFeedScreen
          onChangeTime={onChangeTime}
          plusFeed={plusFeed}
          setInsertManual={setInsertManual}
        />
      </CSSTransition>
      {/* <div className="mamadas-number">{mamadasNumber} / 8</div> */}
    </div>
  );
};
