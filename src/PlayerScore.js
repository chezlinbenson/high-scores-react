import React from "react";

const PlayerScore = (props) => {
  return (
    <ul>
      {props.players.map((player, index) => (
        <li key={index}>
          {player.n} {player.s}
        </li>
      ))}
    </ul>
  );
};
export default PlayerScore;
