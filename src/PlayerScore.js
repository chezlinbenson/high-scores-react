import React from "react";

const PlayerScore = (props) => {
  return (
    <ul>
      {props.players.map((player, index) => (
        <li key={index} className="player-score">
          {player.n} {player.s}
        </li>
      ))}
    </ul>
  );
};
export default PlayerScore;
