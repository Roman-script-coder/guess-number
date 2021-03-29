import './App.css';
import { GameField } from "./GameField";

function App() {
  return (
    <>
      <div className="profilePlayer">
		    <span>Правила игры:<br/>
		    - Введите свое имя;<br/>
		    - Компьютер выбирает случайное число от 1 до 100. Игроку необходимо вводить число, пытаясь найти, какое же число
           выбрал компьютер.</span><br/><br/>
        <input className="playerName" maxLength="17" />
        <button onClick="enterPlayerName()">Ввести имя</button>
      </div>
      <GameField />
    </>
  );
}

export default App;
