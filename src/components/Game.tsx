import { useState } from "react";
import Board from "./Board";

export default function Game() {
  // track previous moves
  const [history, setHistory] = useState([Array(9).fill(null)]);
  // track a single move (current)
  const [currentMove, setCurrentMove] = useState(0);
  // track whos turn it is. X or O.
  const xIsNext = currentMove % 2 === 0;
  // this is how we'll track the previous moves
  const currentSquares = history[currentMove];
  console.log("zzzzzz", currentSquares);

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: any) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
