import React from "react";
import { shallow } from "enzyme";

import { Pagination } from "./Pagination";

const setUp = (props) => shallow(<Pagination {...props} lastPage={20} />);

describe("Pagination component", () => {
  it("should render Pagination component without props", () => {
    const component = shallow(<Pagination />);
    expect(component).toMatchSnapshot();
  });

  it("should render Pagination component with props", () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });

  it("should render Pagination for last pages", () => {
    const component = setUp({ page: 15 });
    expect(component).toMatchSnapshot();
  });

  it("should render Pagination without 3 dots in the middle", () => {
    const component = setUp({ page: 16 });
    expect(component).toMatchSnapshot();
  });

  it("should render Pagination with 3 dots and 3 buttons in the end", () => {
    const component = setUp({ page: 19 });
    expect(component).toMatchSnapshot();
  });

  describe("defaultProps", () => {
    it("should use default onCange", () => {
      const result = Pagination.defaultProps.onClick();
      expect(result).toBe(undefined);
    });
  });
});
