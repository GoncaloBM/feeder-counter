import React, { useState } from "react";
import "./Save.css";

export const Save = ({ postFeeders, feedsSent, setFeedsSent }) => {
  return (
    <>
      <div className="save-button" onClick={postFeeders}>
        Send Feeds
      </div>
      {feedsSent && (
        <div className="feeds-sent-screen">
          <div className="feeds-sent-title">Feeders saved sucessfully</div>
          <div className="feeds-sent-ok" onClick={() => setFeedsSent(false)}>
            OK
          </div>
        </div>
      )}
    </>
  );
};
