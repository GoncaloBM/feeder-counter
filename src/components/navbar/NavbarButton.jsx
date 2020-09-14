import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "../transitions.css";
import { OkButton } from "../buttons/OkButton";

export const NavbarButton = ({
  text,
  img,
  pageChange,
  postFeeders,
  feedsSent,
  setFeedsSent,
}) => {
  const closeWindow = () => {
    setFeedsSent(false);
  };
  const classes = {
    navbarButton: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "20%",
      height: "100%",
    },
  };

  const buttonEffect = () => {
    if (text === "Send") {
      postFeeders();
    } else {
      pageChange(text);
    }
  };
  return (
    <>
      <div
        className="navbar-button"
        style={classes.navbarButton}
        onClick={buttonEffect}
      >
        {img}
        {text !== "Send" && <div className="navbar-text">{text}</div>}
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
