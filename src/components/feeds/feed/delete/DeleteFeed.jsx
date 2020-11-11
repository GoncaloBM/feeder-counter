import React from "react";
import axios from "axios";
import { url } from "../../../../url";

export const DeleteFeed = ({
  id,
  setFeedVisible,
  fetchFeeders,
}) => {
  const deleteFeed = () => {
    const deleteUrl = `${url.online}babyfeeder/feeders/${id}`;
    axios
      .delete(deleteUrl)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        fetchFeeders();
        setFeedVisible(false);
      });
  };

  return (
    <div className="delete-feed-button" onClick={deleteFeed}>
      Delete Feed
    </div>
  );
};
