import React, { useState, useEffect } from "react";
import { formatNumber } from "../../../formatDate";
import { DeleteFeed } from "./delete/DeleteFeed";
import { Comment } from "./comment/Comment";
import { Breast } from "./breast/Breast";
import { Mamadas } from "./mamadas/Mamadas";

export const FeedScreen = ({
  hour,
  minutes,
  novaMamada,
  mamada,
  setFeedVisible,
  changeBreast,
  breast,
  deleteFeed,
  changeComment,
  comment,
  id,
}) => {
  const closeFeed = () => {
    setFeedVisible(false);
    // setFeedVisibleScreen(false);
  };

  return (
    <div className="feed-screen">
      <div className="feed-screen-close" onClick={closeFeed}>
        X
      </div>
      <div className="feed-screen-title">
        {formatNumber(hour)} : {formatNumber(minutes)}
      </div>
      <Mamadas novaMamada={novaMamada} id={id} mamada={mamada} />
      <Breast breast={breast} changeBreast={changeBreast} id={id} />
      <Comment comment={comment} id={id} changeComment={changeComment} />
      <DeleteFeed
        index={id}
        deleteFeed={deleteFeed}
        setFeedVisible={setFeedVisible}
      />
    </div>
  );
};
