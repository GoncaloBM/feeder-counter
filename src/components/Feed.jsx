import React, { useState } from "react";
import { FeedScreen } from "./FeedScreen";
import { formatNumber } from "../formatDate";
import "./Feeds.css";
import "./transitions.css";
import { CSSTransition } from "react-transition-group";

export const Feed = ({
  hour,
  minutes,
  index,
  novaMamada,
  mamada,
  changeBreast,
  breast,
  deleteFeed,
  setHideNavbar,
}) => {
  const [feedVisible, setFeedVisible] = useState(false);

  const clickOnFeed = () => {
    setFeedVisible(!feedVisible);
  };

  return (
    <div className="feed">
      <div
        className="feed-hours"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        key={index}
        onClick={clickOnFeed}
      >
        <div className="feed-time">
          {formatNumber(hour)} : {formatNumber(minutes)}
        </div>
      </div>
      <CSSTransition
        in={feedVisible}
        timeout={300}
        classNames="feed-transition"
        unmountOnExit
      >
        <>
          <FeedScreen
            hour={hour}
            minutes={minutes}
            index={index}
            novaMamada={novaMamada}
            mamada={mamada}
            setFeedVisible={setFeedVisible}
            changeBreast={changeBreast}
            breast={breast}
            deleteFeed={deleteFeed}
          />
        </>
      </CSSTransition>
    </div>
  );
};
