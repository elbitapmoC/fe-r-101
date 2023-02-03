import { useState } from "react";

const Square = () => {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    setValue("X");
  };

  return (
    <>
      <button onClick={handleClick} className="square">
        {value}
      </button>
    </>
  );
};

export default Square;
