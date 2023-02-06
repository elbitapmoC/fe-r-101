import { useEffect, useState } from "react";

type IPosts = {
  userId: number;
  id: number;
  title?: string; //this may or may not exist
  body: string;
}[];

async function getPosts(): Promise<IPosts> {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts/");
  if (!resp.ok) {
    throw new Error("UH OH! Fetch FAILED!");
  }
  return resp.json();
}

export default async function Dashboard() {
  // <the value of this state could be either a string or a null>
  const [postTitle, setPostTitle] = useState<string | null>(null);
  const data = await getPosts();
  // (inside params) we make sure to only accept strings
  const changeTitle = (newTitle: string) => {
    setPostTitle(newTitle);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     changeTitle("HELLOOOO WORLD!");
  //   }, 10000);
  // });

  return (
    <>
      {postTitle}
      {data.map(({ id, title, body }) => (
        <article>
          <h2 key={id}>{title}</h2>
          <p>{body}</p>
        </article>
      ))}
    </>
  );
}
