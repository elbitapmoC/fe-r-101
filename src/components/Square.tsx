import { useState } from "react";

type SquareProps = {
  value: string | null;
  onSquareClick: () => void;
};

const Square = ({ value, onSquareClick }: SquareProps) => {
  const handleClick = () => {
    console.log("object");
  };

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
};

export default Square;
