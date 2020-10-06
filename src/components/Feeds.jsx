import React, { useState, useEffect } from "react";
import { Feed } from "./Feed";
import "./Feeds.css";

export const Feeds = ({
  feeds,
  novaMamada,
  changeBreast,
  page,
  deleteFeed,
  setHideNavbar,
  setFeedVisibleScreen,
  changeComment,
  date
}) => {
  const [mamadas, setMamadas] = useState(0);



  const checkMamadasNumber = () => {
    let currentMamada = mamadas;
    let numberOfMamadas = 0;

    for (let i = 0; i < feeds.length; i++)
      if (
        feeds[i].year === date[0] &&
        feeds[i].month + 1 === date[1] &&
        feeds[i].day === date[2]
      ) {
        numberOfMamadas++;
      }

    currentMamada = numberOfMamadas;
    setMamadas(currentMamada);
  };

  useEffect(() => {
    if (date) {
      checkMamadasNumber();
    }
  }, [date]);

  return (
    <div className="feeds-screen">
      <div className="title" style={{ fontSize: "2.5rem" }}>
        {page === "home"
          ? `Today's Feeds`
          : `${date[2]} / ${date[1]} / ${date[0]}`}
      </div>
      <div className="feeds">
        {feeds.map((feed, index) => {
          if (
            feed.year === date[0] &&
            feed.month + 1 === date[1] &&
            feed.day === date[2]
          ) {
            return (
              <Feed
                hour={feed.hour}
                minutes={feed.minutes}
                mamada={feed.mamadas}
                index={index}
                breast={feed.breast}
                comment={feed.comments}
                id={feed.id}
                novaMamada={novaMamada}
                changeBreast={changeBreast}
                deleteFeed={deleteFeed}
                setHideNavbar={setHideNavbar}
                setFeedVisibleScreen={setFeedVisibleScreen}
                changeComment={changeComment}
              />
            );
          } else {
            return null;
          }
        })}
        <div className="mamadas-number">Mamadas : {mamadas} / 8</div>
      </div>
    </div>
  );
};
