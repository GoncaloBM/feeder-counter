import React, { useState, useEffect } from "react";
import { formatNumber } from "../../../formatDate";
import { DeleteFeed } from "./delete/DeleteFeed";
import { Comment } from "./comment/Comment";
import { Breast } from "./breast/Breast";
import { Mamadas } from "./mamadas/Mamadas";

export const FeedScreen = ({
  hour,
  minutes,
  mamada,
  setFeedVisible,
  breast,
  comment,
  id,
  fetchFeeders
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
      <Mamadas id={id} mamada={mamada} fetchFeeders={fetchFeeders}/>
      <Breast breast={breast} id={id} fetchFeeders={fetchFeeders}/>
      <Comment comment={comment} id={id} fetchFeeders={fetchFeeders} />
      <DeleteFeed
        id={id}
        setFeedVisible={setFeedVisible}
        fetchFeeders={fetchFeeders}
      />
    </div>
  );
};
