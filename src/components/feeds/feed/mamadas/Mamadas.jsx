import React, { useState, useEffect, useContext } from "react";

export const Mamadas = ({ novaMamada, id, mamada }) => {
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
