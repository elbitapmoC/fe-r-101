type ButtonProps = {
  onClick: () => void;
};

const MyButtonSS = ({ onClick }: ButtonProps) => {
  return <button onClick={onClick}>Button</button>;
};

export default MyButtonSS;
