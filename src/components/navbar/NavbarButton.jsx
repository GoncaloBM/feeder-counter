import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "../transitions.css";
import { OkButton } from "../buttons/OkButton";

export const NavbarButton = ({
  text,
  img,
  pageChange,
}) => {

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
  return (
    <>
      <div
        className="navbar-button"
        style={classes.navbarButton}
        onClick={() => pageChange(text)}
      >
        {img}
        <div className="navbar-text">{text}</div>
      </div>
    </>
  );
};
