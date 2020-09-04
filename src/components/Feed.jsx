import React, { useState } from "react";
import { FeedScreen } from "./FeedScreen";

export const Feed = ({ hour, minutes, index, novaMamada, mamada }) => {
  const [mamadasVisible, setMamadasVisible] = useState(false);
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
        <>
          <FeedScreen />
          <div
            className="mamadas-screen"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div
              className="remove-mamada"
              style={{ padding: "5px", border: "1px solid black" }}
              onClick={() => novaMamada(index, -1)}
            >
              -
            </div>
            <div className="mamadas">{mamada} mamadas</div>
            <div
              className="add-mamadas"
              style={{ padding: "5px", border: "1px solid black" }}
              onClick={() => novaMamada(index, 1)}
            >
              +
            </div>
          </div>
        </>
      )}
    </div>
  );
};
