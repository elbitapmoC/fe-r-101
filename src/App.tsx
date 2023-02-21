import { useState } from "react";
import "./App.css";
import Condition1 from "./components/Condition1";
import Condition2 from "./components/Condition2";
import Dashboard from "./components/Dashboard";
import Lists from "./components/Lists";
import MyButtonSS from "./components/MyButtonSS";
import Game from "./components/Game";
import { Select, SelectOption } from "./components/Select";
import MyUser from "./components/MyUser";
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
};

function App() {
  const options = [
    { label: "California", value: "CA" },
    { label: "Texas", value: "TX" },
    { label: "Washington", value: "WA" },
    { label: "Florida", value: "FL" },
    { label: "Virginia", value: "VA" },
    { label: "Georgia", value: "GA" },
    { label: "Michigan", value: "MI" },
  ];

  // Single Value
  const [value1, setValue1] = useState<SelectOption | undefined>(options[0]);

  // Multiple values
  const [value2, setValue2] = useState<SelectOption[]>([options[0]]);

  const user = {
    name: "Hedy Lamarr",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90,
  };

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      {/* 
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

      <MyUser user={user} />

      <MyButtonSS count={count} onClick={handleClick} />

      <Condition1 />

      <Condition2 />

      <Lists />

      <Game />
    </>
  );
}

export default App;
