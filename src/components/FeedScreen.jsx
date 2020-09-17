import React from "react";
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
  setFeedVisibleScreen
}) => {
  const closeFeed = () => {
    setFeedVisible(false);
    setFeedVisibleScreen(false);
  };
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
          onClick={() => novaMamada(index, -1)}
        >
          -
        </div>
        <div className="feed-screen-mamadas">{mamada} mamadas</div>
        <div
          className="feed-screen-edit-mamada"
          onClick={() => novaMamada(index, 1)}
        >
          +
        </div>
      </div>
      <div className="feed-screen-breast">
        <div className="feed-screen-breast-title">Last Breast to feed</div>
        <div className="feed-screen-breast-choices">
          {breast && (
            <div
              className="feed-screen-breast-choice-wrapper"
              style={{ left: breast === "L" ? "0%" : "55%" }}
            ></div>
          )}
          <div
            className="feed-screen-breast-choice"
            onClick={() => changeBreast(index, "L")}
          >
            Left
          </div>
          <div
            className="feed-screen-breast-choice"
            onClick={() => changeBreast(index, "R")}
          >
            Right
          </div>
        </div>
      </div>
      <DeleteFeed index={index} deleteFeed={deleteFeed} setFeedVisibleScreen={setFeedVisibleScreen}/>
    </div>
  );
};
