import React, { useState } from "react";
import { formatNumber } from "../formatDate";
import { DeleteFeed } from "./feed/DeleteFeed";

export const FeedScreen = ({
  hour,
  minutes,
  index,
  novaMamada,
  mamada,
  setFeedVisible,
  changeBreast,
  breast,
  deleteFeed,
}) => {
  return (
    <div className="feed-screen">
      <div className="feed-screen-close" onClick={() => setFeedVisible(false)}>
        X
      </div>
      <div className="feed-screen-title">
        {formatNumber(hour)} : {formatNumber(minutes)}
      </div>
      <div className="feed-screen-mamadas-line">
        <div
          className="feed-screen-edit-mamada"
          style={{ padding: "5px", border: "1px solid black" }}
          onClick={() => novaMamada(index, -1)}
        >
          -
        </div>
        <div className="feed-screen-mamadas">{mamada} mamadas</div>
        <div
          className="feed-screen-edit-mamada"
          style={{ padding: "5px", border: "1px solid black" }}
          onClick={() => novaMamada(index, 1)}
        >
          +
        </div>
      </div>
      <div className="feed-screen-breast">
        <div className="feed-screen-breast-title">Last Breast to feed</div>
        <div className="feed-screen-breast-choices">
          <div
            className="feed-screen-breast-choice"
            onClick={() => changeBreast(index, "L")}
            style={{ border: breast === "L" && "1px solid red" }}
          >
            L
          </div>
          <div
            className="feed-screen-breast-choice"
            onClick={() => changeBreast(index, "R")}
            style={{ border: breast === "R" && "1px solid red" }}
          >
            R
          </div>
        </div>
      </div>
      <DeleteFeed index={index} deleteFeed={deleteFeed} />
    </div>
  );
};
