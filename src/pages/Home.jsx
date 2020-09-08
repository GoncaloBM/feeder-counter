import React, { useState, useEffect } from "react";
import { Feeds } from "../components/Feeds";

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
