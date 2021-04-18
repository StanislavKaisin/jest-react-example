import { shallow } from "enzyme";
import React from "react";
import Info from "./Info";

const setUp = () => shallow(<Info />);

const componentDidMountSpy = jest.spyOn(Info.prototype, "componentDidMount");
const componentDidUpdateSpy = jest.spyOn(Info.prototype, "componentDidUpdate");
const componentWillUnmountSpy = jest.spyOn(
  Info.prototype,
  "componentWillUnmount"
);

describe("Info component", () => {
  let component;
  beforeEach(() => {
    jest.spyOn(window, "addEventListener");
    jest.spyOn(window, "removeEventListener");
    component = setUp();
  });

  afterEach(() => {
    window.addEventListener.mockRestore();
    window.removeEventListener.mockRestore();
  });

  it("should render Info component", () => {
    expect(component).toMatchSnapshot();
  });

  describe("Lifecycle methods", () => {
    it("should call componentDidUnmount method once", () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
    });

    it("should not call componentWillUnmount method when component just mounted", () => {
      expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
      expect(componentWillUnmountSpy).toHaveBeenCalledTimes(0);
    });

    it("should call componentDidUpdate method", () => {
      component.setProps();
      expect(componentDidUpdateSpy).toHaveBeenCalled();
    });

    it("should call componentWillUnmount method", () => {
      component.unmount();
      expect(componentWillUnmountSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("component handlers", () => {
    it("should call addEventListener when component mounted", () => {
      expect(window.addEventListener).toHaveBeenCalledTimes(1);
    });

    it("should call handleChangeTitle in componentDidUpdate", () => {
      const instance = setUp().instance();
      instance.handleChangeTitle = jest.fn();
      instance.componentDidUpdate();
      expect(instance.handleChangeTitle).toHaveBeenCalled();
    });

    it("should call removeEventListener when component unmounted", () => {
      component.unmount();
      expect(window.removeEventListener).toHaveBeenCalledTimes(1);
    });

    it("should call handleWidth during window resize", () => {
      expect(component.state().with).toBe(0);
      global.dispatchEvent(new Event("resize"));
      expect(component.state().with).toBe(window.innerWidth);
    });
  });
});
