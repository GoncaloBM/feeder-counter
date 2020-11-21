import React from "react";
import axios from "axios";
import { url, development } from "../../../../url";

export const DeleteFeed = ({ id, setFeedVisible, fetchFeeders }) => {
  const deleteFeed = () => {
    const { server, online } = url;
    const deleteUrl = `${
      development ? server : online
    }babyfeeder/feeders/${id}`;
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
