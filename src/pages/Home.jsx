import React from "react";
import { Feeds } from "../components/Feeds";
import "./pages.css";
import { Title } from "./Title";
import { PlusFeedButton } from "../components/bottomNavbar/PlusFeedButton";

export const Home = ({
  dateFormated,
  feeds,
  novaMamada,
  changeBreast,
  page,
  deleteFeed,
  mamadasNumber,
  plusButton,
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
      />
      <PlusFeedButton plusButton={plusButton} />
    </div>
  );
};
