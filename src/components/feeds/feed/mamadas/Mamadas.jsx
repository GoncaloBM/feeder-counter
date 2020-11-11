import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { url } from "../../../../url";

export const Mamadas = ({ id, mamada, fetchFeeders }) => {
  const novaMamada = (i, numero) => {
    const mamadaUrl = `${url.online}babyfeeder/feeders/${i}/mamada`;

    axios
      .put(mamadaUrl, { numero: numero })
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
    <div className="feed-screen-mamadas-line">
      <div
        className="feed-screen-edit-mamada"
        onClick={() => novaMamada(id, -1)}
      >
        -
      </div>
      <div className="feed-screen-mamadas">{mamada} mamadas</div>
      <div
        className="feed-screen-edit-mamada"
        onClick={() => novaMamada(id, 1)}
      >
        +
      </div>
    </div>
  );
};
