import React, { useState } from "react";
import { FeedScreen } from "./FeedScreen";
import { formatNumber } from "../formatDate";
import "./Feeds.css";

export const Feed = ({ hour, minutes, index, novaMamada, mamada }) => {
  const [feedVisible, setFeedVisible] = useState(false);
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
        onClick={() => setFeedVisible(!feedVisible)}
      >
        <div className="feed-time">
          {formatNumber(hour)} : {formatNumber(minutes)}
        </div>
      </div>
      {feedVisible && (
        <>
          <FeedScreen
            hour={hour}
            minutes={minutes}
            index={index}
            novaMamada={novaMamada}
            mamada={mamada}
            setFeedVisible={setFeedVisible}
          />
          {/* <div className="feed-screen-mamadas-line">
            <div
              className="remove-mamada"
              style={{ padding: "5px", border: "1px solid black" }}
              onClick={() => novaMamada(index, -1)}
            >
              -
            </div>
            <div className="mamadas">{mamada} mamadas</div>
            <div
              className="add-mamadas"
              style={{ padding: "5px", border: "1px solid black" }}
              onClick={() => novaMamada(index, 1)}
            >
              +
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};
