import { useState } from "react";
import "./App.css";
import Condition1 from "./components/Condition1";
import Condition2 from "./components/Condition2";
import Dashboard from "./components/Dashboard";
import Lists from "./components/Lists";
import MyButtonSS from "./components/MyButtonSS";
import Game from "./components/Game";
import { Select, SelectOption } from "./components/Select";

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
  // OPTIONS
  const options = [
    { label: "California", value: "CA" },
    { label: "Texas", value: "TX" },
    { label: "Washington", value: "WA" },
    { label: "Florida", value: "FL" },
    { label: "Virginia", value: "VA" },
    { label: "Georgia", value: "GA" },
    { label: "Michigan", value: "MI" },
  ];

  // Separate from TODO
  const [count, setCount] = useState(0);

  // Single Value
  const [value1, setValue1] = useState<SelectOption | undefined>(options[0]);

  // Multiple values
  const [value2, setValue2] = useState<SelectOption[]>([options[0]]);

  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };
  // END of separation

  // TODO begins

  return (
    <>
      {/* 
      <MyButton />
      <MyUser user={user} />
      <Condition1 />
      <Condition2 />
      <Lists />
      <MyButtonSS count={count} onClick={handleClick} />
      <MyButtonSS count={count} onClick={handleClick} /> 
      <Dashboard />
      <Game />
      */}
      <Select
        options={options}
        value={value1}
        onChange={(o) => {
          setValue1(o);
        }}
      />

      <hr />

      <Select
        multiple
        options={options}
        value={value2}
        onChange={(o) => {
          setValue2(o);
        }}
      />
    </>
  );
}

export default App;
