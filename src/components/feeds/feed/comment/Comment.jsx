import React, { useState, useEffect, useContext } from "react";

export const Comment = ({ comment, id, changeComment }) => {
  const [feedComment, setFeedComment] = useState(comment);
  const commentChange = (e) => {
    setFeedComment(e.target.value);
  };

  useEffect(() => {
    changeComment(id, feedComment);
  }, [feedComment]);

  return (
    <div className="feed-screen-comment" style={{ width: "80%" }}>
      <div className="feed-screen-comment-title">Comments</div>
      <textarea rows="3" value={comment} onChange={commentChange}></textarea>
    </div>
  );
};
