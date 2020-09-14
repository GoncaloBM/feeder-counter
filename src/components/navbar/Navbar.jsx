import React, { useState, useEffect } from "react";
import { NavbarButton } from "./NavbarButton";

export const Navbar = ({
  pageChange,
  postFeeders,
  feedsSent,
  setFeedsSent,
  page,
}) => {
  const navbarButtons = [
    {
      text: "Today",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-calendar"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke={page === "home" ? "#cabbe9" : "#2c3e50"}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <rect x="4" y="5" width="16" height="16" rx="2" />
          <line x1="16" y1="3" x2="16" y2="7" />
          <line x1="8" y1="3" x2="8" y2="7" />
          <line x1="4" y1="11" x2="20" y2="11" />
          <line x1="11" y1="15" x2="12" y2="15" />
          <line x1="12" y1="15" x2="12" y2="18" />
        </svg>
      ),
    },
    {
      text: "Info",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-info-circle"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke={page === "info" ? "#cabbe9" : "#2c3e50"}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="12" r="9" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
          <polyline points="11 12 12 12 12 16 13 16" />
        </svg>
      ),
    },
    {
      text: "Send",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-send"
          width="52"
          height="52"
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
      ),
    },
    {
      text: "Past Feeds",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-calendar-event"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke={page === "pastFeeds" ? "#cabbe9" : "#2c3e50"}
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
      ),
    },
    {
      text: "Settings",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-settings"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          stroke-width="1"
          stroke={page === "settings" ? "#cabbe9" : "#2c3e50"}
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
  ];

  const classes = {
    navbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      position: "fixed",
      width: "100%",
      height: "10vh",
      bottom: "0",
      boxShadow: "0px -15px 20px rgb(202 187 233 / 40%)",
      zIndex: "200",
      backgroundColor: "#fdfdfd",
      backgroundImage:
        'url("https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png")',
    },
  };
  return (
    <div className="navbar" style={classes.navbar}>
      {navbarButtons.map((navbarbutton, index) => {
        return (
          <NavbarButton
            text={navbarbutton.text}
            img={navbarbutton.img}
            pageChange={pageChange}
            postFeeders={postFeeders}
            feedsSent={feedsSent}
            setFeedsSent={setFeedsSent}
          />
        );
      })}
    </div>
  );
};
