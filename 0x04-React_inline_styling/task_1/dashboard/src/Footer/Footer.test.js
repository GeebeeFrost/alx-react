import React from "react";
import Footer from "./Footer";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Footer component tests", () => {
  it("should render without crashing", () => {
    const footerWrapper = shallow(<Footer />);
    expect(footerWrapper.exists()).toBe(true);
  });

  it("should render p tag with text 'Copyright'", () => {
    const footerWrapper = shallow(<Footer />);
    expect(footerWrapper.find("p").text()).toContain("Copyright");
  });
});
