import React, { useState } from "react";

export const DeleteFeed = ({ index, deleteFeed, setFeedVisibleScreen }) => {
  const deleteF = () => {
    deleteFeed(index);
    setFeedVisibleScreen(false);
  };
  return (
    <div className="delete-feed-button" onClick={deleteF}>
      Delete Feed
    </div>
  );
};
