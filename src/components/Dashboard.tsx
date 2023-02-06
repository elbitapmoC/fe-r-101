import { useEffect, useState } from "react";
import Post from "./Post";

type IPosts = {
  userId: number;
  id: number;
  title?: string; //this may or may not exist
  body: string;
}[];

type IPost = {
  userId?: number;
  id: number;
  title: string; //this may or may not exist
  body: string;
};

async function getPosts(): Promise<IPosts> {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts/");
  if (!resp.ok) {
    throw new Error("UH OH! Fetch FAILED!");
  }
  return resp.json();
}

export default function Dashboard() {
  // <the value of this state could be either a string or a null>
  const [postTitle, setPostTitle] = useState<string | null>(null);

  const [posts, setPosts] = useState([]);

  useState<string | null>(null);

  useEffect(() => {
    getPosts()
      .then((data: any) => setPosts(data))
      .catch((err: any) => console.error(err));
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    setPostTitle("Mango Butter");
    // console.log(e);
  };

  return (
    <>
      <aside>{postTitle}</aside>
      <button onClick={handleClick}>Click Me!</button>
      {posts.map(({ id, title, body }: IPost) => {
        <Post id={id} title={title} body={body} />;
      })}
    </>
  );
}
