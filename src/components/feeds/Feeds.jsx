import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { url } from "../../url";
import { formatDate } from '../../formatDate';
import { Feed } from "./feed/Feed";
import "./Feeds.css";
import { PlusFeedButton } from "./feedButtons/PlusFeedButton";
import SettingsContext from "../../SettingContext";
import { text } from "../texts";


export const Feeds = ({
 feeds,
  novaMamada,
  changeBreast,
  page,
  deleteFeed,
  setFeedVisibleScreen,
  changeComment,
  date,
  setTime,
}) => {
  const [mamadas, setMamadas] = useState(0);
  const { settings } = useContext(SettingsContext);
  const [stateSettings, setStateSettings] = settings;

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
          ? text.home.todayFeed[`${stateSettings.about.language}`]
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
                setFeedVisibleScreen={setFeedVisibleScreen}
                changeComment={changeComment}
                setTime={setTime}
                key={feed.id}
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
