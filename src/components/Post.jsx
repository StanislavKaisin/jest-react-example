import React from "react";

export const Post = ({
  author,
  created_at,
  num_comments,
  title,
  points,
  url,
}) => {
  return (
    <li className="post">
      <div className="description">
        <a href={url} className="title">
          {title}
        </a>
        <span className="text">{`${points} points`}</span>
        <span className="comments">{`${num_comments} comments`}</span>
        <span className="date">
          {created_at ? new Date(created_at).toLocaleString() : "Nodate"}
        </span>
        <span className="aythor">{author}</span>
      </div>
    </li>
  );
};
