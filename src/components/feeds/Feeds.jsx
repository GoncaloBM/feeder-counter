import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { url, development } from "../../url";
import { Feed } from "./feed/Feed";
import "./Feeds.css";
import { PlusFeedButton } from "./feedButtons/PlusFeedButton";
import { SettingsContext } from "../../contexts/SettingsContext";
import { FeedsContext } from "../../contexts/FeedsContext";
import { text } from "../texts";

export const Feeds = ({ page, date }) => {
  const [mamadas, setMamadas] = useState(0);
  const [settings] = useContext(SettingsContext);
  // const [stateSettings, setStateSettings] = settings;
  const [feeds, setFeeds] = useContext(FeedsContext);

  const fetchFeeders = () => {
    const { online, server } = url.getAndPostFeeder;
    axios
      .get(development ? server : online, {
        params: {
          year: date[0],
          month: date[1],
          day: date[2],
          username: settings.user.username,
        },
      })
      .then((resp) => {
        console.log(resp.data);

        let feedsFromDb = resp.data;
        setFeeds(feedsFromDb);
      });
  };

  const checkMamadasNumber = () => {
    const currentFeed = [...feeds];
    let currentMamada = mamadas;
    let numberOfMamadas = 0;

    for (let i = 0; i < currentFeed.length; i++)
      if (
        currentFeed[i].year === date[0] &&
        currentFeed[i].month + 1 === date[1] &&
        currentFeed[i].day === date[2]
      ) {
        numberOfMamadas++;
      }

    currentMamada = numberOfMamadas;
    setMamadas(currentMamada);
  };

  useEffect(() => {
    checkMamadasNumber();
    fetchFeeders();
  }, [date]);

  return (
    <div className="feeds-screen">
      <PlusFeedButton
        fetchFeeders={fetchFeeders}
        page={page}
        feeds={feeds}
        date={date}
      />
      <div className="title" style={{ fontSize: "2.5rem" }}>
        {page === "home"
          ? text.home.todayFeed[`${settings.about.language}`]
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
                key={feed.id}
                fetchFeeders={fetchFeeders}
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
