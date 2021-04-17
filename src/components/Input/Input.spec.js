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

    it("should call onChange method", () => {
      const mockCallBack = jest.fn();
      const component = shallow(<Input onChange={mockCallBack} />);
      expect(mockCallBack.mock.calls.length).toEqual(0);
      component.find(".input").simulate("change");
      expect(mockCallBack.mock.calls.length).toEqual(1);
    });

    it("should use default onKeyPress", () => {
      const result = Input.defaultProps.onKeyPress();
      expect(result).toBeUndefined();
    });
  });
});
