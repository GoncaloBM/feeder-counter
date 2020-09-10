import React from "react";
import "./Save.css";
import { CSSTransition } from "react-transition-group";
import "../transitions.css";
import { OkButton } from "../buttons/OkButton";

export const Save = ({ postFeeders, feedsSent, setFeedsSent }) => {
  const closeWindow = () => {
    setFeedsSent(false);
  };
  return (
    <>
      <div className="save-button" onClick={postFeeders}>
        <div className="save-button-text">Save Feeds</div>
      </div>
      <CSSTransition
        in={feedsSent}
        timeout={300}
        classNames="feed-transition"
        unmountOnExit
      >
        <div className="feeds-sent-screen">
          <div className="feeds-sent-title">Feeders saved sucessfully</div>
          <OkButton buttonEffect={closeWindow} buttonText="OK" />
        </div>
      </CSSTransition>
    </>
  );
};
