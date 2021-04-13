import { render, shallow } from "enzyme";
import { Posts } from "./Posts";
import React from "react";

describe("Posts component", () => {
  it("should render Post component", () => {
    const component = render(<Posts />);
    expect(component).toMatchInlineSnapshot(`
      <ul
        class="newsList"
      >
        <li>
          test
        </li>
        <li
          class="post"
        >
          <div
            class="description"
          >
            <a
              class="title"
              href="//test.url"
            >
              Jest & Enzyme
            </a>
            <span
              class="text"
            >
              100 points
            </span>
            <span
              class="comments"
            >
              10 comments
            </span>
            <span
              class="date"
            >
              04.05.2020, 02:36:09
            </span>
            <span
              class="author"
            >
              Yauhen
            </span>
          </div>
        </li>
        <li
          class="post"
        >
          <div
            class="description"
          >
            <a
              class="title"
              href="//test2121.url"
            >
              TypeScript Basics
            </a>
            <span
              class="text"
            >
              10 points
            </span>
            <span
              class="comments"
            >
              8 comments
            </span>
            <span
              class="date"
            >
              06.05.2020, 02:36:09
            </span>
            <span
              class="author"
            >
              Stepan
            </span>
          </div>
        </li>
      </ul>
    `);
  });
});

// npm test -u Posts.spec.js
