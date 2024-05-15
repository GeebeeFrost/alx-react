/**
 * @jest-environment jsdom
 */
import React from "react";
import { shallow } from "enzyme";
import { mapStateToProps, App } from "./App";
import { fromJS } from "immutable";
import { StyleSheetTestUtils } from "aphrodite";

describe("<App />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  it("should contain the Login component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login")).toHaveLength(1);
  });

  it("CourseList is not displayed with isLoggedIn false by default", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });

  it("isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);

    expect(wrapper.find("Login")).toHaveLength(0);
    expect(wrapper.find("CourseList")).toHaveLength(1);
  });
});

describe("App Redux", () => {
  it("mapStateToProps returns the right object from user Login", () => {
    let state = fromJS({
      isUserLoggedIn: true,
    });

    const result = mapStateToProps(state);

    expect(result).toEqual({ isLoggedIn: true });
  });
  it("mapStateToProps returns the right object from display Drawer", () => {
    let state = fromJS({
      isNotificationDrawerVisible: true,
    });

    const result = mapStateToProps(state);

    expect(result).toEqual({ displayDrawer: true });
  });
});
