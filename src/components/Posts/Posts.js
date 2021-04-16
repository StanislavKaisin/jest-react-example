import React from "react";
import { Input } from "../Input/Input";
import { Post } from "../Post/Post";
import { Select } from "../Select/Select";
import { Title } from "../Title/Title";

// const NEWS = [
//   {
//     author: "Yauhen",
//     created_at: "2020-05-03T23:36:09.816Z",
//     num_comments: 10,
//     objectID: 1,
//     title: "Jest & Enzyme",
//     points: 100,
//     url: "//test.url",
//   },
//   {
//     author: "Stepan",
//     created_at: "2020-05-05T23:36:09.816Z",
//     num_comments: 8,
//     objectID: 2,
//     title: "TypeScript Basics",
//     points: 10,
//     url: "//test2121.url",
//   },
// ];

import { NEWS, HITS } from "./constants";

export class Posts extends React.Component {
  state = { searchQuery: "", hitsPerPage: 20, page: 0 };

  handleInputChange = ({ target: { value } }) => {
    this.setState({ searchQuery: value });
  };

  handleHitsChange = ({ target: { value } }) => {
    this.setState({ hitsPerPage: +value, page: 0 });
  };

  getSearch = ({ key }) => {
    if (key === "Enter") {
      this.setState({ page: 0 });
    }
  };

  render() {
    const { searchQuery, hitsPerPage } = this.state;

    return (
      <div className="wrapper">
        <Title title="Hacker News" />
        <Select
          options={HITS}
          handleChange={this.handleHitsChange}
          value={hitsPerPage}
        />
        <Input
          onKeyPress={this.getSearch}
          onChange={this.handleInputChange}
          value={searchQuery}
        />
        <ul className="newsList">
          <li>test</li>
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
      </div>
    );
  }
}
