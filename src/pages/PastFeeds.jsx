import React from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import { Feeds } from "../components/Feeds";
import { ManualFeedScreen } from "../components/bottomNavbar/manualFeed/ManualFeedScreen";
import "./pages.css";
import { CSSTransition } from "react-transition-group";
import { Title } from "./Title";

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
  setHideNavbar
}) => {
  return (
    <div className="past-feeds">
      <Title height="5vh" font="1.5rem" borderWeight="2" />
      <div className="calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
      <Feeds
        dateFormated={dateFormated}
        feeds={feeds}
        novaMamada={novaMamada}
        changeBreast={changeBreast}
        deleteFeed={deleteFeed}
        setHideNavbar={setHideNavbar}
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
