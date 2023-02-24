import { useState, useContext, createContext } from "react";

const UserContext = createContext<any | null>(null);

const UseContext = () => {
  const [user, setUser] = useState("Zel elbitapmoC");

  return (
    <UserContext.Provider value={user}>
      <hr className="mt-10" />
      <Component1 />
    </UserContext.Provider>
  );
};

function Component1() {
  return (
    <>
      <h1>Component 1</h1>
      <Component2 />
    </>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const user: string = useContext(UserContext);

  return (
    <aside className="mt-6">
      <h1>Component 5</h1>
      <p>{user}</p>
    </aside>
  );
}

export default UseContext;
