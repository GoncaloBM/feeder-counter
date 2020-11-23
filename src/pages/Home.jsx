import React from "react";
import { Feeds } from "../components/feeds/Feeds";
import "./pages.css";
import { Title } from "./Title";
import { FeedsContextProvider } from "../contexts/FeedsContext";

export const Home = ({
  page,

  date,
}) => {
  return (
    // <FeedsContextProvider>
      <div className="home">
        <Title height="10vh" font="2.5rem" borderWeight="5" />
        <Feeds date={date} page={page} />
      </div>
    // </FeedsContextProvider>
  );
};
