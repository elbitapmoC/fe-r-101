type IDetails = {
  name: string;
  imageUrl: string;
};

const MyUser = ({ user }: { user: IDetails }) => {
  const { name, imageUrl } = user;

  return (
    <>
      <p>{name}!</p>
      <img src={imageUrl} alt={`picture of ${name}`} />
    </>
  );
};

export default MyUser;
