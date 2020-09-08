import React from "react";
import "./Save.css";
import { CSSTransition } from "react-transition-group";
import "../transitions.css";

export const Save = ({ postFeeders, feedsSent, setFeedsSent }) => {
  return (
    <>
      <div className="save-button" onClick={postFeeders}>
        Send Feeds
      </div>
      <CSSTransition
        in={feedsSent}
        timeout={300}
        classNames="feed-transition"
        unmountOnExit
      >
        <div className="feeds-sent-screen">
          <div className="feeds-sent-title">Feeders saved sucessfully</div>
          <div className="feeds-sent-ok" onClick={() => setFeedsSent(false)}>
            OK
          </div>
        </div>
      </CSSTransition>
    </>
  );
};
