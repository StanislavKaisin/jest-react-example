import { render, shallow } from "enzyme";
import { Posts } from "./Posts";
import React from "react";

const setUp = () => {
  return shallow(<Posts />);
};

describe("Posts component", () => {
  const DEFAULT_PAGE = 10;
  let component;
  let instance;

  beforeEach(() => {
    component = setUp();
    instance = component.instance();
  });

  describe("Posts handlers", () => {
    it("should handler search input value", () => {
      expect(component.state().searchQuery).toBe("");
      instance.handleInputChange({ target: { value: "test" } });
      expect(component.state().searchQuery).toBe("test");
    });

    it("should handler change hits per page", () => {
      expect(component.state().hitsPerPage).toBe(20);
      instance.handleHitsChange({ target: { value: String(DEFAULT_PAGE) } });
      expect(component.state().hitsPerPage).toBe(DEFAULT_PAGE);
    });

    it("should handler change if Enter clicked", () => {
      instance.setState({ page: DEFAULT_PAGE });
      instance.getSearch({ key: "Enter" });
      expect(component.state().page).toBe(0);
    });

    it("should not change if a button is clicked", () => {
      instance.setState({ page: DEFAULT_PAGE });
      instance.getSearch({ key: "a" });
      expect(component.state().page).toBe(DEFAULT_PAGE);
    });
  });

  it("should render Post component", () => {
    const component = render(<Posts />);
    expect(component).toMatchInlineSnapshot(`
      <div
        class="wrapper"
      >
        <h1
          class="title"
        >
          Hacker News
        </h1>
        <div
          class="selectWrapper"
        >
          <select>
            <option
              value="10"
            >
              10
            </option>
            <option
              selected=""
              value="20"
            >
              20
            </option>
            <option
              value="40"
            >
              40
            </option>
            <option
              value="50"
            >
              50
            </option>
          </select>
           
        </div>
        <div
          class="inputWrapper"
        >
          <i
            class="fas fa-search"
          />
          <input
            class="input"
            placeholder="Click to search"
            value=""
          />
        </div>
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
      </div>
    `);
  });
});

// npm test -u Posts.spec.js
