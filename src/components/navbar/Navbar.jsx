import React from "react";
import "./Navbar.css";
import { NavbarButton } from "./NavbarButton";
import { PlusFeedButton } from "../bottomNavbar/PlusFeedButton";

export const Navbar = ({ pageChange, page, plusButton }) => {
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

  const settingsButtons = [
    {
      text: "Login/Sign Up",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-login"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M20 12h-13l3 -3m0 6l-3 -3" />
        </svg>
      ),
    },
    {
      text: "My Baby",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-lego"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="9.5" y1="11" x2="9.51" y2="11" />
          <line x1="14.5" y1="11" x2="14.51" y2="11" />
          <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
          <path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3" />
        </svg>
      ),
    },
    {
      text: "About",
      img: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-stack"
          width="52"
          height="52"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#2c3e50"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="12 4 4 8 12 12 20 8 12 4" />
          <polyline points="4 12 12 16 20 12" />
          <polyline points="4 16 12 20 20 16" />
        </svg>
      ),
    },
  ];

  const classes = {
    navbar: {
      display: "flex",
      flexDirection: "collumn",
      position: "fixed",
      width: "100%",
      height: "10vh",
      bottom: "0",
      boxShadow: "0px -15px 20px rgb(202 187 233 / 40%)",
      zIndex: "100",
      backgroundColor: "#fdfdfd",
      backgroundImage:
        'url("https://www.transparenttextures.com/patterns/noise-pattern-with-subtle-cross-lines.png")',
    },
  };
  return (
    <div className="navbar" style={classes.navbar}>
      {(page === "home" || page === "pastFeeds") && (
        <PlusFeedButton plusButton={plusButton} />
      )}
      <div
        className="navbar-line"
        style={{ top: page !== "settings" ? "0%" : "100%" }}
      >
        {navbarButtons.map((navbarbutton, index) => {
          return (
            <NavbarButton
              text={navbarbutton.text}
              img={navbarbutton.img}
              pageChange={pageChange}
            />
          );
        })}
      </div>
      <div
        className="navbar-line"
        style={{ top: page !== "settings" ? "100%" : "0%" }}
      >
        {settingsButtons.map((navbarbutton, index) => {
          return (
            <NavbarButton
              text={navbarbutton.text}
              img={navbarbutton.img}
              pageChange={pageChange}
            />
          );
        })}
      </div>
    </div>
  );
};
