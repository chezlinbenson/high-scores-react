import React from "react";
import PlayerScore from "./PlayerScore";
import allCountryScores from "./scores";
import scores from "./scores";

const HighScoreTable = () => {
  scores.sort((a, b) => {
    const nameA = a.name; // ignore upper and lowercase
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

  return (
    <div>
      {scores.map((country, index) => (
        <div key={index}>
          <table className="table">
            <thead>
              <tr>
                <th>
                  <h2>HIGH SCORES:{country.name}</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <PlayerScore players={country.scores} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default HighScoreTable;
