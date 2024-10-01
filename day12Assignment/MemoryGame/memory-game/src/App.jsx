import { useState } from "react";
import "./App.css";
import Game from "./component/Game";

function App() {
  const [startGame, setStartGame] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-black font-bold text-white">
      <header className="text-3xl text-center text-white mb-4">
        How good you are in memory!
      </header>
      <p className="text-lg text-center text-white mb-8">
        Find all pairs in <span className="text-red-500">least time</span> and
        with <span className="text-red-500">minimum clicks</span>
      </p>
      <div className="flex flex-col items-center">
        {!startGame && (
          <button
            className="p-2 bg-white rounded-xl border border-red-500 shadow-md shadow-red-500 text-red-500 mx-auto cursor-pointer hover:bg-red-500 hover:text-white transition duration-300"
            onClick={() => setStartGame(true)}
          >
            Let's Find Out
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
