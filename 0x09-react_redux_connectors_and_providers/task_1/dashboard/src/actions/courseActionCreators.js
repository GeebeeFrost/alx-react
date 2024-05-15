import * as actions from "./courseActionTypes";

export function selectCourse(index) {
  return {
    type: actions.SELECT_COURSE,
    index,
  };
}

export function unSelectCourse(index) {
  return {
    type: actions.UNSELECT_COURSE,
    index,
  };
}

export function fetchCourseSuccess(data) {
  return {
    type: actions.FETCH_COURSE_SUCCESS,
    data,
  };
}

export const boundSelectCourse = (index) => dispatch(selectCourse(index));
export const boundUnSelectCourse = (index) => dispatch(unSelectCourse(index));
export const boundFetchCourseSuccess = (data) =>
  dispatch(fetchCourseSuccess(data));
