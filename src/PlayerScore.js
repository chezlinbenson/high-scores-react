import React from "react";

const PlayerScore = ({player}) => {
  return (
    <td>
      {player.n} {player.s}
    </td>
  );
};
export default PlayerScore;
