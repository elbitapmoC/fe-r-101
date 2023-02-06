import React from "react";

type IPost = {
  userId?: number;
  id: number;
  title: string; //this may or may not exist
  body: string;
};

const Post = ({ userId, id, title, body }: IPost) => {
  return (
    <article>
      <h2 key={id}>{title}</h2>
      <p>{body}</p>
    </article>
  );
};

export default Post;
