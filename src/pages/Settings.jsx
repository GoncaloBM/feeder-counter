import React, { useState, useContext } from "react";
import "./pages.css";
import "./Settings.css";
import { CSSTransition } from "react-transition-group";
import { LoginScreen } from "./settings/LoginScreen";
import { BabyScreen } from "./settings/BabyScreen";
import { AboutScreen } from "./settings/AboutScreen";
import { SettingsContext } from "../contexts/SettingsContext";
import { text } from "../components/texts";

export const Settings = ({ pageChange, pages }) => {
  const [settings] = useContext(SettingsContext);
  return (
    <div className="settings">
      {pages.settings && (
        <div className="back" onClick={() => pageChange("home")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-arrow-left"
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
            <line x1="5" y1="12" x2="19" y2="12" />
            <line x1="5" y1="12" x2="11" y2="18" />
            <line x1="5" y1="12" x2="11" y2="6" />
          </svg>
        </div>
      )}

      <CSSTransition
        in={pages.login}
        timeout={200}
        classNames="login-transition"
        unmountOnExit
      >
        <LoginScreen />
      </CSSTransition>

      <CSSTransition
        in={pages.baby}
        timeout={200}
        classNames="baby-transition"
        unmountOnExit
      >
        <BabyScreen />
      </CSSTransition>
      <CSSTransition
        in={pages.app}
        timeout={200}
        classNames="about-transition"
        unmountOnExit
      >
        <AboutScreen />
      </CSSTransition>
    </div>
  );
};
