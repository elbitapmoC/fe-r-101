const AdminPanel = () => {
  return <p>BOOM Shakalaka!</p>;
};

const NormalPanel = () => {
  return <p>Good day sir!</p>;
};

const Condition1 = () => {
  const panelType: string = "Adam";
  let showPanel;

  if (panelType === "Admin") {
    showPanel = <AdminPanel />;
  } else {
    showPanel = <NormalPanel />;
  }

  return <>{showPanel}</>;
};

export default Condition1;
