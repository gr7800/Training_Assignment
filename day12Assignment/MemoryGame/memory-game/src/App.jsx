import { useState } from "react";
import "./App.css";
import Game from "./component/Game";

function App() {
  const [startGame, setStartGame] = useState(true);

  console.log(startGame);

  return (
    <div className="w-full min-h-screen p-10 bg-teal-600 flex flex-col font-bold">
      <div>
        <header className="text-center mx-auto text-3xl">
          How good ypu are in memory!
        </header>
        <p className="text-center mx-auto text-lg">
          Find all paire in <span className="text-red-500">least time</span> $
          with <span className="text-red-500">minimum clicks</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
      {!startGame && (
        <button
          className="p-2 bg-white rounded-xl border border-red-500 text-red-500 mx-auto cursor-pointer"
          onClick={(e) => setStartGame(true)}
        >
          Let's Found out
        </button>
      )}
      {startGame && (
        <Game isStart={startGame} setIsStart={(value) => setStartGame(value)} />
      )}
      </div>
    </div>
  );
}

export default App;
