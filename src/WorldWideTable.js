import React from "react";
import PlayerScore from "./PlayerScore";
import scores from "./scores";

const WorldWideTable = () => {
  let allScoresArr = [];

  scores.map((el) =>
    el.scores.map((player) => {
      allScoresArr.push(player);
    })
  );

  allScoresArr.sort((a, b) => b.s - a.s);

  return (
    <div className="countryCard">
      <table className="table">
        <thead>
          <tr>
            <th>{/* <h1>{sectionHeading}</h1> */}</th>
          </tr>
        </thead>
        <tbody className="countryCard">
          {allScoresArr.map((player, index) => (
            <tr key={index} className="player-score">
              <PlayerScore player={player} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorldWideTable;
