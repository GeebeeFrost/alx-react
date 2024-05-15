import * as actions from "./uiActionTypes";

export const login = (email, password) => ({
  type: actions.LOGIN,
  user: { email, password },
});
export const logout = () => ({ type: actions.LOGOUT });
export const displayNotificationDrawer = () => ({
  type: actions.DISPLAY_NOTIFICATION_DRAWER,
});
export const hideNotificationDrawer = () => ({
  type: actions.HIDE_NOTIFICATION_DRAWER,
});
export const loginSuccess = () => ({ type: actions.LOGIN_SUCCESS });
export const loginFailure = () => ({ type: actions.LOGIN_FAILURE });

export const boundLogin = (email, password) => dispatch(login(email, password));
export const boundLogout = () => dispatch(logout());
export const boundDisplayNotificationDrawer = () =>
  dispatch(displayNotificationDrawer());
export const boundHideNotificationDrawer = () =>
  dispatch(hideNotificationDrawer());

export const loginRequest = (email, password) => {
  boundLogin(email, password);
  return fetch("/login-success.json");
  // .then((res) => res.json())
  // .then((json) => {
  //   dispatch(loginSuccess());
  //   return json;
  // })
  // .catch((error) => {
  //   dispatch(loginFailure());
  //   throw error;
  // });
};
