import React from "react";
import { Post } from "./Post";

const NEWS = [
  {
    author: "Yauhen",
    created_at: "2020-05-03T23:36:09.816Z",
    num_comments: 10,
    objectID: 1,
    title: "Jest & Enzyme",
    points: 100,
    url: "//test.url",
  },
  {
    author: "Stepan",
    created_at: "2020-05-05T23:36:09.816Z",
    num_comments: 8,
    objectID: 2,
    title: "TypeScript Basics",
    points: 10,
    url: "//test2121.url",
  },
];

export const Posts = () => {
  return (
    <ul className="newsList">
      {NEWS.map(
        ({
          author,
          created_at,
          num_comments,
          title,
          points,
          url,
          objectID,
        }) => {
          return (
            <Post
              key={objectID}
              author={author}
              created_at={created_at}
              num_comments={num_comments}
              title={title}
              points={points}
              url={url}
            />
          );
        }
      )}
    </ul>
  );
};
