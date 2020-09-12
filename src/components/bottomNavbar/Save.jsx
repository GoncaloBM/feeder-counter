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
        <div className="save-button-text">
          Save Feeds{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-send"
            // width="20"
            height="50%"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <line x1="10" y1="14" x2="21" y2="3" />
            <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
          </svg>
        </div>
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
