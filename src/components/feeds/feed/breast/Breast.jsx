import React, { useState, useEffect, useContext } from "react";

export const Breast = ({ breast, changeBreast, id }) => {
  return (
    <div className="feed-screen-breast">
      <div className="feed-screen-breast-title">Last Breast to feed</div>
      <div className="feed-screen-breast-choices">
        {breast && (
          <div
            className="feed-screen-breast-choice-wrapper"
            style={{ left: breast === "L" ? "0%" : "55%" }}
          ></div>
        )}
        <div
          className="feed-screen-breast-choice"
          onClick={() => changeBreast(id, "L")}
        >
          Left
        </div>
        <div
          className="feed-screen-breast-choice"
          onClick={() => changeBreast(id, "R")}
        >
          Right
        </div>
      </div>
    </div>
  );
};
