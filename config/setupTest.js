import Enzyme, { mount, render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import toJson from "enzyme-to-json";

//React 16 Enzyme adapter
Enzyme.configure({ adapter: Adapter() });

// interface IGlobal {
//   Global: typeof globalThis;
// }

// interface Iglobal extends IGlobal {
//   shallow: any;
//   render: any;
//   mount: any;
//   toJson: any;
// }

// declare global {
//   interface Global {
//     shallow: any;
//     render: any;
//     mount: any;
//     toJson: any;
//   }
// }

global.shallow = shallow;
global.render = render;
global.mount = mount;
global.toJson = toJson;

// Fail tests on any warning
console.error = (message) => {
  throw new Error(message);
};
