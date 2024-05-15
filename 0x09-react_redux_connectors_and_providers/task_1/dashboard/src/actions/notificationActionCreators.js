import * as actions from "./notificationActionTypes";

export const markAsRead = (index) => ({ type: actions.MARK_AS_READ, index });
export const setNotificationFilter = (filter) => ({
  type: actions.SET_TYPE_FILTER,
  filter: actions.NotificationTypeFilters[filter],
});
export const fetchNotificationsSuccess = (data) => ({
  type: actions.FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

export const boundMarkAsRead = (index) => dispatch(markAsRead(index));
export const boundSetNotificationFilter = (filter) =>
  dispatch(setNotificationFilter(filter));
export const boundFetchNotificationsSuccess = (data) =>
  dispatch(fetchNotificationsSuccess(data));
