import { useEffect, useState } from "react";

const Lists = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/users/");
    const json = await resp.json();
    setUsers(json);
  };

  const listUsers = users.map(
    ({ id, username }: { id: number; username: string }) => {
      return (
        <aside key={id} style={{ color: id % 2 === 0 ? "orange" : "blue" }}>
          {username}
        </aside>
      );
    }
  );

  useEffect(() => {
    fetchData();
  }, []);

  return <>{users && <>{listUsers}</>}</>;
};

export default Lists;
