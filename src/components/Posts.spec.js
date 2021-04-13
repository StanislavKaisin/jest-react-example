import { shallow } from "enzyme";
import { Posts } from "./Posts";
import React from "react";

describe("Posts component", () => {
  it("should render Post component", () => {
    const component = shallow(<Posts />);
    expect(component).toMatchInlineSnapshot(`
      <ul
        className="newsList"
      >
        <Post
          author="Yauhen"
          created_at="2020-05-03T23:36:09.816Z"
          key="1"
          num_comments={10}
          points={100}
          title="Jest & Enzyme"
          url="//test.url"
        />
        <Post
          author="Stepan"
          created_at="2020-05-05T23:36:09.816Z"
          key="2"
          num_comments={8}
          points={10}
          title="TypeScript Basics"
          url="//test2121.url"
        />
      </ul>
    `);
  });
});
