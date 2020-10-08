import React from "react";
import "./pages.css";
import "./Settings.css";
import { Login } from './settings/Login';

export const Settings = ({ pageChange }) => {
  return (
    <div className="settings">
      <div className="back" onClick={() => pageChange("Today")}>
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
      <Login/>
    </div>
    
  );
};
