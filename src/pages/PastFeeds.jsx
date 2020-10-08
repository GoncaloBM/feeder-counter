import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Feeds } from "../components/Feeds";
import { ManualFeedScreen } from "../components/bottomNavbar/manualFeed/ManualFeedScreen";
import "./pages.css";
import { CSSTransition } from "react-transition-group";
import { Title } from "./Title";

export const PastFeeds = ({
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
  changeComment,
  date,
  setFeedVisibleScreen
}) => {
  return (
    <div className="past-feeds">
      <Title height="5vh" font="1.5rem" borderWeight="2" />
      <div className="calendar" style={{ width: "80%" }}>
        <Calendar onChange={onChange} value={value} />
      </div>
      <Feeds
        date={date}
        feeds={feeds}
        novaMamada={novaMamada}
        changeBreast={changeBreast}
        deleteFeed={deleteFeed}
        changeComment={changeComment}
        setFeedVisibleScreen={setFeedVisibleScreen}
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
    </div>
  );
};
