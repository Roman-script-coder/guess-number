export const GameField = () => {
  return (
    <div className="gameField">
      <input className="enterGuessNumber" />
      <button onClick="enterNumber()">Ввести число</button>
      <div className="informationField">
        <div className="answersMore" />
        <div className="answersLess" />
        <div className="answerRight" />
      </div>
      <div className="overallResult">
        <span>Имя игрока:</span>
        <span>Количество попыток игрока:</span>
      </div>
    </div>
  );
}
