import React, { useState, useEffect } from "react";
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
  setFeedVisibleScreen,
  changeComment,
  comment,
  id,
}) => {
  const closeFeed = () => {
    setFeedVisible(false);
    setFeedVisibleScreen(false);
  };

  const [feedComment, setFeedComment] = useState(comment);
  const commentChange = (e) => {
    setFeedComment(e.target.value);
  };

  useEffect(() => {
    changeComment(id, feedComment);
  }, [feedComment]);

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
          onClick={() => novaMamada(id, -1)}
        >
          -
        </div>
        <div className="feed-screen-mamadas">{mamada} mamadas</div>
        <div
          className="feed-screen-edit-mamada"
          onClick={() => novaMamada(id, 1)}
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
            onClick={() => changeBreast(id, "L")}
          >
            Left
          </div>
          <div
            className="feed-screen-breast-choice"
            onClick={() => changeBreast(id, "R")}
          >
            Right
          </div>
        </div>
        <div className="feed-screen-comment">
          <div className="feed-screen-comment-title">Comments</div>
          <textarea
            rows="3"
            value={comment}
            onChange={commentChange}
          ></textarea>
        </div>
      </div>
      <DeleteFeed
        index={id}
        deleteFeed={deleteFeed}
        setFeedVisible={setFeedVisible}
      />
    </div>
  );
};
