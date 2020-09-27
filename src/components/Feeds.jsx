import React, { useState, useEffect } from "react";
import { Feed } from "./Feed";
import "./Feeds.css";

export const Feeds = ({
  dateFormated,
  feeds,
  novaMamada,
  changeBreast,
  page,
  deleteFeed,
  setHideNavbar,
  setFeedVisibleScreen,
  changeComment,
}) => {
  const [mamadas, setMamadas] = useState(0);

  const [feedsToShow, setFeedsToShow] = useState([]);

  const showingFeeds = () => {
    if (dateFormated && feeds) {
      let feedsByDay = [];
      const feedsArr = [...feeds];

      for (let i = 0; i < feeds.length; i++) {
        if (
          feedsArr[i].year === dateFormated[0] &&
          feedsArr[i].month + 1 === dateFormated[1] &&
          feedsArr[i].day === dateFormated[2]
        ) {
          feedsByDay = [...feedsByDay, feedsArr[i]];
        }
      }
      setFeedsToShow(feedsByDay);
    }
  };

  const checkMamadasNumber = () => {
    let currentMamada = mamadas;
    let numberOfMamadas = 0;

    for (let i = 0; i < feeds.length; i++)
      if (
        feeds[i].year === dateFormated[0] &&
        feeds[i].month + 1 === dateFormated[1] &&
        feeds[i].day === dateFormated[2]
      ) {
        numberOfMamadas++;
      }

    currentMamada = numberOfMamadas;
    setMamadas(currentMamada);
  };

  useEffect(() => {
    if (dateFormated) {
      checkMamadasNumber();
      showingFeeds();
    }
  }, [dateFormated]);

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
