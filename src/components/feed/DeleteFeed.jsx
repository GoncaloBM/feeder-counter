import React, { useState } from "react";

export const DeleteFeed = ({ index, deleteFeed, setFeedVisible }) => {
  const deleteF = () => {
    deleteFeed(index);
    setFeedVisible(false);
  };
  return (
    <div className="delete-feed-button" onClick={deleteF}>
      Delete Feed
    </div>
  );
};
