import { useEffect, useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <p>Times rendered: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default State;
