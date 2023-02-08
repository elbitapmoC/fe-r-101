import { useState } from "react";
import Square from "./Square";

type IBoards = {
  playerOne: boolean;
  squares: string[];
  handlePlay: () => void;
};

const Board = ({ playerOne, squares, handlePlay }: IBoards) => {
  const onSquareClick = (sq: number) => {
    // checks to see if the square is already filled up
    if (squares[sq] || calculateWinner(squares)) {
      return;
    }

    // Make a copy of array
    const nextSquares = [...squares];
    // Updates value at index to either X or O
    if (playerOne) {
      nextSquares[sq] = "X";
      setSquares(nextSquares);
      setPlayerOne(!playerOne);
    } else {
      nextSquares[sq] = "O";
      setSquares(nextSquares);
      setPlayerOne(!playerOne);
    }
  };

  return (
    <>
      <aside>Status: {status}</aside>
      <div className="board-row">
        <Square
          value={squares[0]}
          handleClick={() => {
            onSquareClick(0);
          }}
        />
        <Square
          value={squares[1]}
          handleClick={() => {
            onSquareClick(1);
          }}
        />
        <Square
          value={squares[2]}
          handleClick={() => {
            onSquareClick(2);
          }}
        />
      </div>

      <div className="board-row">
        <Square
          value={squares[3]}
          handleClick={() => {
            onSquareClick(3);
          }}
        />
        <Square
          value={squares[4]}
          handleClick={() => {
            onSquareClick(4);
          }}
        />
        <Square
          value={squares[5]}
          handleClick={() => {
            onSquareClick(5);
          }}
        />
      </div>

      <div className="board-row">
        <Square
          value={squares[6]}
          handleClick={() => {
            onSquareClick(6);
          }}
        />
        <Square
          value={squares[7]}
          handleClick={() => {
            onSquareClick(7);
          }}
        />
        <Square
          value={squares[8]}
          handleClick={() => {
            onSquareClick(8);
          }}
        />
      </div>
    </>
  );
};

function calculateWinner(squares: string[]) {
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
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;
