import { useState } from "react";
import "./App.css";
import Condition1 from "./components/Condition1";
import Condition2 from "./components/Condition2";
import Lists from "./components/Lists";
import Game from "./components/Game";
import MyUser from "./components/MyUser";
import UseEffect from "./components/UseEffect";
import UseContext from "./components/UseContext";
import UseRef from "./components/UseRef";
import UseReducer from "./components/UseReducer";
import Pokemon from "./components/Pokemon";
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
      {/* <MyUser user={user} /> */}

      {/* <Condition1 /> */}

      {/* <Condition2 /> */}

      {/* <Lists /> */}

      {/* <Game /> */}

      <UseEffect />

      {/* <UseContext /> */}

      {/* <UseRef /> */}

      {/* <UseReducer /> */}

      {/* <Pokemon /> */}
    </>
  );
}

export default App;
