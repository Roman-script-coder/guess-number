// import './App.css';

import React from "react";

export const OverallResult = () => {
  const recordResult$ = localStorage.getItem('resultPlayerNameScore');
  const valueRecordResult = JSON.parse(recordResult$);
  const [recordResult, setRecordResult] = React.useState(valueRecordResult);

  return (
    <div className="overallResult">
      <span>Имя игрока:</span>
      <span>Количество попыток игрока:</span>
      {recordResult && recordResult.map((el) =>
        <React.Fragment key={el.name + el.score}>
          <div className="recordDiv">{el.name}</div>
          <div className="recordDiv">{el.score}</div>
        </React.Fragment>
      )}
    </div>
  );
}
