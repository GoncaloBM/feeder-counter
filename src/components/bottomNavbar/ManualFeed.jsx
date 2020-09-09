import React from "react";
import "./ManualFeed.css";
import "antd/dist/antd.css";

export const ManualFeed = ({ changePage, page }) => {
  return (
    <div className="manual-feed">
      <div className="past-feed-text" onClick={changePage}>
        {page === "home" ? "Past Feeds" : "Back Home"}
      </div>
    </div>
  );
};
