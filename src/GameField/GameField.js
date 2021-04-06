// import './App.css';

export const GameField = () => {
  // const enterGuessNumber = document.querySelector(".enterGuessNumber");
  // const answersMore = document.querySelector(".answersMore");
  // const answersLess = document.querySelector(".answersLess");
  // const answerRight = document.querySelector(".answerRight");
  // const overallResult = document.querySelector(".overallResult");
  // const randomNumber = getRandomInRange(1, 100);

  // const enterNumber = () => {
  //   const enterPalyerGuessNumber = enterGuessNumber.value;
  //   if(isNaN(enterPalyerGuessNumber)) {
  //     enterGuessNumber.value="";
  //     enterGuessNumber.setAttribute("placeholder", "Введите число");
  //   } else if(enterPalyerGuessNumber > 100 || enterPalyerGuessNumber < 1) {
  //     enterGuessNumber.value="";
  //     enterGuessNumber.setAttribute("placeholder", "Введите число от 1 до 100");
  //   } else {
  //     answersText(enterPalyerGuessNumber);
  //   }
  // }
  //
  // function getRandomInRange(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1)) + min;
  // }
  //
  // let numberOfAttempts = 0;
  //
  // const answersText = (e) => {
  //   const resultAnswers = document.createElement("div");
  //   enterGuessNumber.value="";
  //   if(e < randomNumber) {
  //     numberOfAttempts++;
  //     enterGuessNumber.setAttribute("placeholder", "Введите число побольше");
  //     resultAnswers.innerText = "Больше числа: " + e;
  //     answersMore.classList.add("answersStyle");
  //     answersMore.append(resultAnswers);
  //   } else if(e > randomNumber) {
  //     numberOfAttempts++;
  //     enterGuessNumber.setAttribute("placeholder", "Введите число поменьше");
  //     resultAnswers.innerText = "Меньше числа: " + e;
  //     answersLess.classList.add("answersStyle");
  //     answersLess.append(resultAnswers);
  //   } else {
  //     enterGuessNumber.removeAttribute("placeholder");
  //     enterGuessNumber.disabled = true;
  //     resultAnswers.innerText = `Количество неправильных попыток: ${numberOfAttempts}
	// 									   Правильный ответ: ${e}`
  //     answerRight.classList.add("answersStyle");
  //     answerRight.append(resultAnswers);
  //     saveResult(numberOfAttempts);
  //   }
  // }
  //
  // const result = [];
  //
  // const saveResult = () => {
  //   const resultPlayer = {};
  //   resultPlayer.name = enterName;
  //   resultPlayer.score = numberOfAttempts;
  //   result.push(resultPlayer);
  //   console.log(localStorage.getItem('resultPlayerNameScore'))
  //   if(localStorage.getItem('resultPlayerNameScore') == null) {
  //     result[0] = resultPlayer;
  //     let labelBefore  = JSON.stringify(result);
  //     localStorage.setItem('resultPlayerNameScore', labelBefore);
  //   } else {
  //     let saveResult = localStorage.getItem('resultPlayerNameScore');
  //     let valueResult = JSON.parse(saveResult);
  //     valueResult.push(resultPlayer);
  //     let labelAfter = JSON.stringify(valueResult);
  //     localStorage.setItem('resultPlayerNameScore', labelAfter);
  //   }
  // }

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
