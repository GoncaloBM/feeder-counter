import React, { useState, useEffect } from "react";
import { FeedScreen } from "./FeedScreen";
import { formatNumber } from "../../../formatDate";
import "../Feeds.css";
import "../../transitions.css";
import { CSSTransition } from "react-transition-group";

export const Feed = ({
  hour,
  minutes,
  index,
  mamada,
  breast,
  comment,
  id,
  fetchFeeders
}) => {
  const [feedVisible, setFeedVisible] = useState(false);

  const clickOnFeed = () => {
   // const currentHour = new Date();
    setFeedVisible(true);
    // setTime({
    //   hours: currentHour.getHours(),
    //   minutes: currentHour.getMinutes(),
    // });
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
            id={id}
            comment={comment}
            mamada={mamada}
            setFeedVisible={setFeedVisible}
            breast={breast}
            fetchFeeders={fetchFeeders}
          />
        </>
      </CSSTransition>
    </div>
  );
};
