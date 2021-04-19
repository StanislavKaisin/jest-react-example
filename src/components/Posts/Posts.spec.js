import { render, shallow } from "enzyme";
import { Posts } from "./Posts";
import React from "react";

import {
  NEWS,
  BASE_PATH,
  SEARCH_PATH,
  SEARCH_PARAM,
  PAGE_HITS,
  PAGE_PARAM,
} from "./constants";

const mockJsonPromise = Promise.resolve({ hits: NEWS, page: 1, nbPages: 10 });
const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

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

  it("should call fetch in componentDidMount", () => {
    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${""}&${PAGE_HITS}${20}&${PAGE_PARAM}${0}`
    );
  });

  describe("udatePage method", () => {
    it("should update state 'page'", () => {
      instance.updatePage(DEFAULT_PAGE);
      expect(component.state().page).toBe(DEFAULT_PAGE);
    });

    it("should call fetch with given arguments", () => {
      instance.updatePage(DEFAULT_PAGE);
      expect(global.fetch).toHaveBeenCalledWith(
        `${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${""}&${PAGE_HITS}${20}&${PAGE_PARAM}${0}`
      );
    });
  });

  describe("handlePageChange method", () => {
    it("should call 'updatePage' with given argument", () => {
      instance.updatePage = jest.fn();
      instance.setState({ page: DEFAULT_PAGE });
      instance.handlePageChange({
        target: { getAttribute: jest.fn().mockReturnValue("1") },
      });
      expect(instance.updatePage).toHaveBeenCalledWith(1);
    });

    it("should call 'updatePage' with increased value", () => {
      instance.updatePage = jest.fn();
      instance.setState({ page: DEFAULT_PAGE });
      instance.handlePageChange({
        target: { getAttribute: jest.fn().mockReturnValue("prev") },
      });
      expect(instance.updatePage).toHaveBeenCalledWith(DEFAULT_PAGE - 1);
    });

    it("should call 'updatePage' with decreased value", () => {
      instance.updatePage = jest.fn();
      instance.setState({ page: DEFAULT_PAGE });
      instance.handlePageChange({
        target: { getAttribute: jest.fn().mockReturnValue("next") },
      });
      expect(instance.updatePage).toHaveBeenCalledWith(DEFAULT_PAGE + 1);
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
        />
      </div>
    `);
  });
});

// npm test -u Posts.spec.js
