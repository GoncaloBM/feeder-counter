import React from "react";
import { Feeds } from "../components/Feeds";
import "./pages.css";

export const Home = ({
  dateFormated,
  feeds,
  novaMamada,
  changeBreast,
  page,
  deleteFeed,
}) => {
  return (
    <div className="home">
      <div className="app-title" style={{ fontSize: "3rem" }}>
        myBaby's Feeds
      </div>
      <Feeds
        dateFormated={dateFormated}
        feeds={feeds}
        novaMamada={novaMamada}
        changeBreast={changeBreast}
        page={page}
        deleteFeed={deleteFeed}
      />
    </div>
  );
};
