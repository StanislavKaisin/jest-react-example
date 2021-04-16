import React from "react";
import { shallow } from "enzyme";
import { Input } from "./Input";

describe("Input component", () => {
  it("should render Input component", () => {
    const component = shallow(<Input />);
    expect(component).toMatchSnapshot();
  });

  describe("default props", () => {
    it("should use default onChange", () => {
      const result = Input.defaultProps.onChange();
      expect(result).toBeUndefined();
    });
    it("should use default onKeyPress", () => {
      const result = Input.defaultProps.onKeyPress();
      expect(result).toBeUndefined();
    });
  });
});
