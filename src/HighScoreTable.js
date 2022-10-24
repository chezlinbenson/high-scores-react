import React, { useState } from "react";
import PlayerScore from "./PlayerScore";
import scores from "./scores";

const HighScoreTable = () => {
  const [status, setStatus] = useState(true);

  scores.sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name; // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });

  function sortData(countryPlayers) {
    if (status) {
      countryPlayers.sort((a, b) => b.s - a.s);
      console.log("here");
    } else {
      countryPlayers.sort((a, b) => a.s - b.s);
      console.log("there");
    }
    return countryPlayers;
  }

  function statusToggle() {
    status ? setStatus(false) : setStatus(true);
    scores.map((country, index) => sortData(country.scores));
    console.log(status);
  }

  return (
    <div>
      <button onClick={statusToggle} className="sort-Button">
        Sort Scores
      </button>
      {scores.map((country, index) => (
        <div key={index} className="countryCard">
          <table className="table">
            <thead>
              <tr>
                <th>
                  <h2>HIGH SCORES:{country.name}</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortData(country.scores).map((player, index) => (
                <tr key={index} className="player-score">
                  <PlayerScore player={player} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default HighScoreTable;
