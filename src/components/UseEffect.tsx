import { useEffect, useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    // Without our side effect below, this component will be rendered on initiation as well as once it unmounts.
    // Cleanup - a way of stopping side effects that do not need to be executed anymore
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
