import React, { useState } from "react";
import { formatNumber } from "../formatDate";

export const FeedScreen = ({
  hour,
  minutes,
  index,
  novaMamada,
  mamada,
  setFeedVisible,
}) => {
  return (
    <div className="feed-screen">
      <div className="feed-screen-close" onClick={() => setFeedVisible(false)}>
        X
      </div>
      <div className="feed-screen-title">
        {formatNumber(hour)} : {formatNumber(minutes)}
      </div>
      <div className="feed-screen-mamadas-line">
        <div
          className="feed-screen-edit-mamada"
          style={{ padding: "5px", border: "1px solid black" }}
          onClick={() => novaMamada(index, -1)}
        >
          -
        </div>
        <div className="feed-screen-mamadas">{mamada} mamadas</div>
        <div
          className="feed-screen-edit-mamada"
          style={{ padding: "5px", border: "1px solid black" }}
          onClick={() => novaMamada(index, 1)}
        >
          +
        </div>
      </div>
    </div>
  );
};
