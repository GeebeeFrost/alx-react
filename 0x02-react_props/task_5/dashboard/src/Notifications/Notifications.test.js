import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import NotificationItem from "./NotificationItem";

describe("Notifications Component Tests", () => {
  it("renders without crashing", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.exists()).toBe(true);
  });

  it("should render menuItem when displayDrawer is false", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find(".menuItem").exists()).toBe(true);
  });

  it("should not render the Notifications div when displayDrawer is false", () => {
    const notifications = shallow(<Notifications />);
    expect(notifications.find(".Notifications").exists()).toBe(false);
  });

  it("renders a list of NotificationItem components with correct HTML", () => {
    const notifications = shallow(<Notifications displayDrawer />);
    expect(notifications.find("ul").exists()).toBe(true);
    notifications.find("ul").forEach((listItem) => {
      expect(listItem.equals(<NotificationItem type="default" />));
    });
    expect(notifications.find("ul").childAt(0).html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });

  it("renders the text 'Here is the list of notifications'", () => {
    const notifications = shallow(<Notifications displayDrawer />);
    expect(notifications.find("p").text()).toBe(
      "Here is the list of notifications"
    );
  });
  it("should render menuItem when displayDrawer is true", () => {
    const notifications = shallow(<Notifications displayDrawer />);
    expect(notifications.find(".menuItem").exists()).toBe(true);
  });

  it("should render the Notifications div when displayDrawer is true", () => {
    const notifications = shallow(<Notifications displayDrawer />);
    expect(notifications.find(".Notifications").exists()).toBe(true);
  });
});
