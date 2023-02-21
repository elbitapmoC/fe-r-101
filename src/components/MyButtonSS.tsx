type ButtonProps = {
  count: number;
  onClick: () => void;
};

const MyButtonSS = ({ count, onClick }: ButtonProps) => {
  return <button onClick={onClick}>Button: {count}</button>;
};

export default MyButtonSS;
