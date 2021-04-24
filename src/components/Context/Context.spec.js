import React from "react";
import { AuthProvider } from "./Context";
// import { ContextComponent } from "./Component";
import { ContextComponent } from "./Component";

// import { mount } from "enzyme";
import Enzyme, { shallow, render, mount } from "enzyme";

describe("ContextComponent component", () => {
  console.log(`AuthProvider`, AuthProvider);
  console.log(`ContextComponent`, ContextComponent);

  it("should toggle login status", () => {
    const component = mount(
      <AuthProvider>
        <ContextComponent />
      </AuthProvider>
    );
    expect(component.find("div").text()).toBe("false");
    component.find(".btn").simulate("click");
    expect(component.find("div").text()).toBe("true");
    component.find(".btn").simulate("click");
    expect(component.find("div").text()).toBe("false");
  });
});
