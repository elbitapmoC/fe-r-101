import { useState } from "react";
import "./App.css";
import Condition1 from "./components/Condition1";
import Condition2 from "./components/Condition2";
import Dashboard from "./components/Dashboard";
import Lists from "./components/Lists";
import MyButtonSS from "./components/MyButtonSS";
import Game from "./components/Game";

function MyButton() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return <button onClick={handleClick}>count is {count}</button>;
}

type IDetails = {
  name: string;
  imageUrl: string;
  imageSize: number;
};

const MyUser = ({ user }: { user: IDetails }) => {
  const { name, imageUrl, imageSize } = user;

  return <p>Helllooooo {name}!</p>;
};

function App() {
  // Separate from TODO
  const [count, setCount] = useState(0);

  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  // END of separation

  // TODO begins

  return (
    <div className="App">
      {/* 
      <MyButton />
      <MyUser user={user} />
      <Condition1 />
      <Condition2 />
      <Lists />
      <MyButtonSS count={count} onClick={handleClick} />
      <MyButtonSS count={count} onClick={handleClick} /> 
      */}

      {/* <Dashboard /> */}

      <Game />
    </div>
  );
}

export default App;
