import React from "react";

const AdminPanel = () => {
  return <p>BOOM Shakalaka!</p>;
};

const NormalPanel = () => {
  return <p>Good day sir!</p>;
};

const Condition1 = () => {
  let displayType = "Admin";
  let userType;
  if (displayType === "Admin") {
    userType = <AdminPanel />;
  } else userType = <NormalPanel />;

  return <div>{userType}</div>;
};

export default Condition1;
