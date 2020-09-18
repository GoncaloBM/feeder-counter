import React from "react";
import { Feeds } from "../components/Feeds";
import "./pages.css";
import { Title } from "./Title";

export const Home = ({
  dateFormated,
  feeds,
  novaMamada,
  changeBreast,
  page,
  deleteFeed,
  mamadasNumber,
  setFeedVisibleScreen,
  changeComment
}) => {
  return (
    <div className="home">
      <Title height="10vh" font="2.5rem" borderWeight="5" />
      <Feeds
        dateFormated={dateFormated}
        feeds={feeds}
        novaMamada={novaMamada}
        changeBreast={changeBreast}
        page={page}
        deleteFeed={deleteFeed}
        setFeedVisibleScreen={setFeedVisibleScreen}
        changeComment={changeComment}
      />
    </div>
  );
};
