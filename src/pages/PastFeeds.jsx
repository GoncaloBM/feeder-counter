import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Feeds } from "../components/feeds/Feeds";
import { ManualFeedScreen } from "../components/feeds/feedButtons/manual/ManualFeedScreen";
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
  setFeedVisibleScreen,
  setTime,
  time,
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
        novaMamada={novaMamada}
        changeBreast={changeBreast}
        deleteFeed={deleteFeed}
        changeComment={changeComment}
        setFeedVisibleScreen={setFeedVisibleScreen}
        setTime={setTime}
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
          setTime={setTime}
          time={time}
        />
      </CSSTransition>
    </div>
  );
};
