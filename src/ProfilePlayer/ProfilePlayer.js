// import './App.css';

import React from "react";

export const ProfilePlayer = (setGameStarted) => {
  const [value, setValue] = React.useState("");

  const enterPlayerName = () => {
    if (!value) {
      // playerName.setAttribute("placeholder", "Введите имя");
    } else {
      setGameStarted(true);
    }
  }

  const onPlayerNameChange = (value$) => {
    setValue(value$);
  }

  return (
    <div className="profilePlayer">
      <span>Правила игры:<br/>
      - Введите свое имя;<br/>
      - Компьютер выбирает случайное число от 1 до 100. Игроку необходимо вводить число, пытаясь найти, какое же число
        выбрал компьютер.</span><br/><br/>
      <input
        className="playerName"
        value={value}
        onChange={onPlayerNameChange}
        maxLength="17"
      />
      <button onClick={enterPlayerName}>Ввести имя</button>
    </div>
  );
}
