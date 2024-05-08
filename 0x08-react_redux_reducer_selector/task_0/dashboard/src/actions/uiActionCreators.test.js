import * as actionCreators from "./uiActionCreators";
// import * as loginSuccess from "../../dist/login-success.json";
// import configureStore from "redux-mock-store";
// import { thunk } from "redux-thunk";

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

// const middlewares = [thunk];
// const mockStore = configureStore(middlewares);

// describe("loginRequest tests", () => {
//   beforeEach(() => {
//     global.fetch = jest.fn();
//   });

//   afterEach(() => {
//     global.fetch.mockClear();
//   });

//   it("should pass LOGIN and LOGIN_SUCCESS to the store if API returns the right response", () => {
//     const mockResponse = loginSuccess;

//     global.fetch.mockResolvedValueOnce({
//       json: () => Promise.resolve(mockResponse),
//     });

//     const store = mockStore({});
//     const email = "johann.salva@holberton.nz";
//     const password = "password";

//     return store.dispatch(
//       actionCreators.loginRequest(email, password).then(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual(actionCreators.loginSuccess());
//         expect(actions[1]).toEqual(actionCreators.login());
//       })
//     );
//   });

//   it("should pass LOGIN and LOGIN_FAILURE if API query fails", () => {
//     global.fetch.mockRejectedValueOnce(400);

//     const store = mockStore({});
//     const email = "johann.salva@holberton.nz";
//     const password = "password";

//     return store.dispatch(
//       actionCreators.loginRequest(email, password).catch(() => {
//         const actions = store.getActions();
//         expect(actions[0]).toEqual(actionCreators.loginFailure());
//         expect(actions[1]).toEqual(actionCreators.login());
//       })
//     );
//   });
// });
