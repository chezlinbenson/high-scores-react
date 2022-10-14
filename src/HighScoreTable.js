import React from "react";
import PlayerScore from "./PlayerScore";
import scores from "./scores";

const HighScoreTable = () => {
  return (
    <div>
      {scores.map((country, index) => (
        <div key={index}>
          <h2>HIGH SCORES:{country.name}</h2>
          <PlayerScore players={country.scores} />
        </div>
      ))}
    </div>
  );
};

export default HighScoreTable;
