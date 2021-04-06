import './App.css';
import React from "react";
import { GameField } from "./GameField";
import { ProfilePlayer } from "./ProfilePlayer";
import { OverallResult } from "./OverallResult";

function App() {
  const [isGameStarted, setGameStarted] = React.useState(false);

  return (
    <>
      {!isGameStarted
        ? <ProfilePlayer setGameStarted={setGameStarted} />
        : <GameField />
      }
      <OverallResult />
    </>
  );
}

export default App;
