import React from "react";
import { Feeds } from "../components/Feeds";
import "./pages.css";
import { Title } from "./Title";

export const Home = ({
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
  return (
    <div className="home">
      <Title height="10vh" font="2.5rem" borderWeight="5" />
      <Feeds
        date={date}
        feeds={feeds}
        novaMamada={novaMamada}
        changeBreast={changeBreast}
        page={page}
        deleteFeed={deleteFeed}
        setFeedVisibleScreen={setFeedVisibleScreen}
        changeComment={changeComment}
        setTime={setTime}
      />
    </div>
  );
};
