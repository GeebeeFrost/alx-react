import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App Component Tests", () => {
  it("renders without crashing", () => {
    const app = shallow(<App />);
    expect(app.exists()).toBe(true);
  });
});
