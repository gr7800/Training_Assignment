import React from 'react'

const Result = ({ score, clickCount, handleRestart }) => {
    return (
        <div className="flex flex-col items-center mx-auto w-fit gap-2">
            <h2 className="text-4xl">Game Over!</h2>
            <p>Your Score: {score}</p>
            <p>Total Clicks: {clickCount}</p>
            <button
                className="p-2 bg-white rounded-xl border border-red-500 text-red-500 shadow-md shadow-white mx-auto cursor-pointer"
                onClick={handleRestart}
            >
                Restart Game
            </button>
        </div>
    )
}

export default Result