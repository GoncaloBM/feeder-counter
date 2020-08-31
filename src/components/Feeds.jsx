import React, { useState, useEffect } from "react";
import { Feed } from "./Feed";

export const Feeds = ({ dateFormated, feeds }) => {
  return (
    <div className="feed-screen">
      <div className="title" style={{ fontSize: "2.5rem" }}>
        {dateFormated[2]} / {dateFormated[1]} / {dateFormated[0]}
      </div>
      <div
        className="feeds"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {feeds
          .filter(
            (feed) =>
              feed.year === dateFormated[0] &&
              feed.month + 1 === dateFormated[1] &&
              feed.day === dateFormated[2]
          )
          .map((feed, index) => {
            return (
              <Feed hour={feed.hour} minutes={feed.minutes} index={index} />
            );
          })}
      </div>
    </div>
  );
};
