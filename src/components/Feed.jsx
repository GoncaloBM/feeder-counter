import React, { useState, useEffect } from "react";

export const Feed = ({ hour, minutes, index }) => {
  const [mamadasVisible, setMamadasVisible] = useState(false);
  const [mamadas, setMamadas] = useState(0);

  const newMam = (i) => {
    const novaMamada = mamadas + i;
    if (novaMamada < 0) {
      return;
    } else {
      setMamadas(novaMamada);
    }
  };
  return (
    <div
      className="feed"
      style={{
        borderBottom: "1px solid black",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="feed-hours"
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        key={index}
        onClick={() => setMamadasVisible(!mamadasVisible)}
      >
        <div className="hour">{hour} : </div>
        <div className="minute"> {minutes}</div>
      </div>
      {mamadasVisible && (
        <div
          className="mamadas-screen"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className="remove-mamada"
            style={{ padding: "5px", border: "1px solid black" }}
            onClick={() => newMam(-1)}
          >
            -
          </div>
          <div className="mamadas">{mamadas} mamadas</div>
          <div
            className="add-mamadas"
            style={{ padding: "5px", border: "1px solid black" }}
            onClick={() => newMam(1)}
          >
            +
          </div>
        </div>
      )}
    </div>
  );
};
