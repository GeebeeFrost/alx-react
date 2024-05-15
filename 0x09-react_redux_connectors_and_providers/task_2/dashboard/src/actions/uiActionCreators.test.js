import * as actionCreators from "./uiActionCreators";
import * as loginSuccess from "../../dist/login-success.json";
import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

describe("uiActionCreators tests", () => {
  it("login function should return a LOGIN action", () => {
    const action = actionCreators.login("test@test.com", "pass");
    expect(action).toEqual({
      type: "LOGIN",
      user: { email: "test@test.com", password: "pass" },
    });
  });

  it("logout function should return a LOGOUT action", () => {
    const action = actionCreators.logout();
    expect(action).toEqual({ type: "LOGOUT" });
  });

  it("displayNotificationDrawer function should return a DISPLAY_NOTIFICATION_DRAWER action", () => {
    const action = actionCreators.displayNotificationDrawer();
    expect(action).toEqual({ type: "DISPLAY_NOTIFICATION_DRAWER" });
  });

  it("hideNotificationDrawer function should return a HIDE_NOTIFICATION_DRAWER action", () => {
    const action = actionCreators.hideNotificationDrawer();
    expect(action).toEqual({ type: "HIDE_NOTIFICATION_DRAWER" });
  });
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("Async action creators tests", function () {
  afterEach(() => {
    fetchMock.restore();
  });

  it("should verify that if the API returns the right response, the store received two actions LOGIN and LOGING_SUCCESS", () => {
    const store = mockStore({});
    fetchMock.restore();

    const user = {
      email: "test@test.com",
      password: "123456",
    };

    fetchMock.get("http://localhost:8564/login-success.json", "{}");

    return store.dispatch(loginRequest(user.email, user.password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(login(user.email, user.password));
      expect(actions[1]).toEqual(loginSuccess());
    });
  });

  it("should verify that if the API query fails, the store received two actions LOGIN and LOGIN_FAILURE", () => {
    // Return the promise
    const store = mockStore({});

    fetchMock.mock("http://localhost:8564/login-success.json", 500);

    const user = {
      email: "test@test.com",
      password: "123456",
    };

    return store.dispatch(loginRequest(user.email, user.password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(login(user.email, user.password));
      expect(actions[1]).toEqual(loginFailure());
    });
  });
});
