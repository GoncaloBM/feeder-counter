import React from "react";
import "./ManualFeed.css";
import "antd/dist/antd.css";

export const ManualFeed =  ({ changePage, page }) => {
  return (
    <div className="manual-feed">
      <div className="past-feed-text" onClick={changePage}>
        {page === "home" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-calendar-event"
            height="50%"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <rect x="4" y="5" width="16" height="16" rx="2" />
            <line x1="16" y1="3" x2="16" y2="7" />
            <line x1="8" y1="3" x2="8" y2="7" />
            <line x1="4" y1="11" x2="20" y2="11" />
            <rect x="8" y="15" width="2" height="2" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-narrow-left"
            height="50%"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="9" y2="16" />
            <line x1="5" y1="12" x2="9" y2="8" />
          </svg>
        )}
        {page === "home" ? "Past Feeds" : "Back Home"}
      </div>
    </div>
  );
};
