import React from "react";
//style
import "../sass/scoreboard.css";
export const ScoreBoard = ({ score, xplayer }) => {
  return (
    <div className="dashboard">
      <h1 className={`score x ${xplayer ? "active" : "inactive"}`}>
        X - {score.Xscore}
      </h1>
      <h1 className={`score o ${!xplayer ? "active" : "inactive"}`}>
        O - {score.Oscore}
      </h1>
    </div>
  );
};
