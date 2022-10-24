import React from "react";
import ScoreHeading from "./ScoreHeading";
import HighScoreTable from "./HighScoreTable";
import WorldWideTable from "./WorldWideTable";

const App = () => {
  return (
    <div>
      <ScoreHeading sectionHeading="World-Wide" />
      <WorldWideTable />
      <ScoreHeading sectionHeading="High Scores per Country" />
      <HighScoreTable />
    </div>
  );
};

export default App;
