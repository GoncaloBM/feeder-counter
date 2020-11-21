import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { url, development } from "../../../../url";

export const Comment = ({ comment, id, fetchFeeders }) => {
  const [feedComment, setFeedComment] = useState(comment);
  const commentChange = (e) => {
    setFeedComment(e.target.value);
  };

  const changeComment = (i, comment) => {
    const { server, online } = url;
    const commentUrl = `${
      development ? server : online
    }babyfeeder/feeders/${i}/comments`;

    axios
      .put(commentUrl, { comments: comment })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        fetchFeeders();
      });
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
