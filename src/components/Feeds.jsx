import React, { useState, useEffect } from "react";
import { Feed } from "./Feed";
import "./Feeds.css";

export const Feeds = ({
  dateFormated,
  feeds,
  novaMamada,
  changeBreast,
  page,
}) => {
  return (
    <div className="feeds-screen">
      <div className="title" style={{ fontSize: "2.5rem" }}>
        {page === "home"
          ? `Today's Feeds`
          : `${dateFormated[2]} / ${dateFormated[1]} / ${dateFormated[0]}`}
      </div>
      <div className="feeds">
        {feeds.map((feed, index) => {
          if (
            feed.year === dateFormated[0] &&
            feed.month + 1 === dateFormated[1] &&
            feed.day === dateFormated[2]
          ) {
            return (
              <Feed
                hour={feed.hour}
                minutes={feed.minutes}
                mamada={feed.mamadas}
                index={index}
                breast={feed.breast}
                novaMamada={novaMamada}
                changeBreast={changeBreast}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};
