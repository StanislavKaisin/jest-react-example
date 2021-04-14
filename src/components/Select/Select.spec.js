import React from "react";

import { shallow } from "enzyme";
import { Select } from "./Select";

const props = {
  options: [
    { value: "text1", label: "Test 1" },
    { value: "text2", label: "Test 2" },
  ],
  value: 0,
  handleChange: () => {},
};

const setUp = (props) => {
  return shallow(<Select {...props} />);
};

describe("Select component", () => {
  describe("Has props", () => {
    const component = setUp(props);

    it("should render select element", () => {
      const select = component.find("select");
      expect(select).toHaveLength(1);
    });

    it("should render 2 options", () => {
      const options = component.find("option");
      expect(options).toHaveLength(2);
    });
  });

  describe("Has no props", () => {
    it("should render placeholder", () => {
      const component = shallow(<Select />);
      const placeholder = component.find(".placeholder");
      expect(placeholder).toHaveLength(1);
    });
  });

  describe("default props", () => {
    it("should use default handleChange", () => {
      const result = Select.defaultProps.handleChange();
      // expect(result).toBeUndefined();
      expect(result).toBe("Test");
    });
  });
});
