import React, { useState } from "react";

export const DeleteFeed = ({ index, deleteFeed }) => {
  return (
    <div className="delete-feed-button" onClick={() => deleteFeed(index)}>Delete Feed</div>
  );
};
