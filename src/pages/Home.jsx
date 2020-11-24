import React from "react";
import { Feeds } from "../components/feeds/Feeds";
import "./pages.css";
import { Title } from "./Title";

export const Home = ({ page, date }) => {
  return (
    <div className="home">
      <Title height="10vh" font="2.5rem" borderWeight="5" />
      <Feeds date={date} page={page} />
    </div>
  );
};
