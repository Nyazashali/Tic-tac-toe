import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="h-screen bg-gray-800 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-semibold mb-6">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-3">
        {board.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="w-24 h-24 bg-gray-700 flex items-center justify-center text-2xl font-bold border-2 border-gray-500 hover:bg-gray-800 transition"
          >
            {value}
          </button>
        ))}
      </div>
      {winner && (
        <p className="mt-4 text-2xl font-semibold">
          Winner: <span className="text-green-500">{winner}</span>
        </p>
      )}
      {!winner && !board.includes(null) && (
        <p className="mt-4 text-xl font-semibold text-yellow-400">It's a Draw!</p>
      )}
      <button
        onClick={resetGame}
        className="mt-6 px-4 py-2 bg-blue-800 rounded hover:bg-blue-500 transition"
      >
        Restart Game
      </button>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;
