import { useState } from "react";
import "./App.css";
import Game from "./component/Game";
import { difficultyLevelOption, ghostBgImage } from "./utils/constants";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [difficultyLevel, setDifficultyLevel] = useState(5);
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-8 font-bold text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${ghostBgImage})` }}
    >
      <header className="text-3xl text-center text-white mb-4">
        How good you are in memory!
      </header>
      <p className="text-lg text-center text-white mb-8">
        Find all pairs in <span className="text-red-500">least time</span> and
        with <span className="text-red-500">minimum clicks</span>
      </p>
      <div className="flex flex-col items-center">
        {!startGame && (
          <div className="grid gap-5 border border-white p-10 rounded-md shadow-md shadow-red-500 bg-gray-600 bg-opacity-[50%]">
            <div className="flex flex-col w-full">
              <label
                className="text-red-500 text-sm px-2"
                htmlFor="selectLevel"
              >
                Difficulty Level
              </label>
              <select
                name="selectLevel"
                id="selectLevel"
                className="p-2 w-full outline-none bg-white rounded-xl border border-red-500 shadow-md shadow-red-500 text-red-500 mx-auto cursor-pointer hover:bg-red-500 hover:border-white hover:text-white transition duration-300"
                value={difficultyLevel}
                onChange={(e) => setDifficultyLevel(e.target.value)}
              >
                {difficultyLevelOption.map((options, i) => (
                  <option
                    value={options?.value}
                    key={options.id}
                    className="bg-red-500 border border-b-white"
                  >
                    {options.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="p-2 bg-white rounded-xl border border-red-500 shadow-md shadow-red-500 text-red-500 mx-auto cursor-pointer hover:bg-red-500 hover:text-white transition duration-300"
              onClick={() => setStartGame(true)}
            >
              Let's Find Out
            </button>
          </div>
        )}
        {startGame && (
          <Game
            isStart={startGame}
            setIsStart={(value) => setStartGame(value)}
            difficultyLevel={difficultyLevel}
          />
        )}
      </div>
    </div>
  );
}

export default App;
