import { shallow } from "enzyme";
import React from "react";
import { Post } from "./Post";

const setUp = (props) => {
  return shallow(<Post {...props} />);
};

describe("should render Post component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .post wrapper", () => {
    const wrapper = component.find(".post");
    expect(wrapper.length).toBe(1);
    // console.log(component.debug());
  });

  it("should contain link", () => {
    const wrapper = component.find("a");
    expect(wrapper.length).toBe(1);
  });

  it("should render create data", () => {
    const created_at = "01-03-2021";
    component = setUp({ created_at });
    const date = component.find(".date");
    expect(date.text()).toBe(new Date(created_at).toLocaleString());
  });
});
