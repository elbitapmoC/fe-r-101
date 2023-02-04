type ISquare = {
  value: string;
  handleClick: () => void;
};

const Square = ({ value, handleClick }: ISquare) => {
  return (
    <>
      <button className="square" onClick={handleClick}>
        {value}
      </button>
    </>
  );
};

export default Square;
