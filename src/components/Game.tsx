import Board from "./Board";

const Game = () => {
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [playerOne, setPlayerOne] = useState(true);

  return (
    <>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
    </>
  );
};

export default Game;
