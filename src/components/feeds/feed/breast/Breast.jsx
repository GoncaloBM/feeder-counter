import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { url } from "../../../../url";

export const Breast = ({ breast, id, fetchFeeders }) => {
  
  const changeBreast = (i, breast) => {
    const mamadaUrl = `${url.online}babyfeeder/feeders/${i}/breast`;

    axios
      .put(mamadaUrl, { breast: breast })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then((res) => {
        fetchFeeders();
      });
  };

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
