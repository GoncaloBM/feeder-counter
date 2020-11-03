import React, { useState, useEffect } from "react";
import "../transitions.css";

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
      height: "90%",
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
