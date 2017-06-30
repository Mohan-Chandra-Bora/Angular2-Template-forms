import { Course } from '../courses/course';
import { IAppState } from './IAppState';
import { FILTER_COURSES, REQUEST_ALL_COURSES } from '../courses/course.actions';

const courses = [];

const initialState: IAppState = {
    courses,
    filteredCourses: courses
};

function filterC(state, action): IAppState {
  return Object.assign({}, state, {filteredCourses: state.courses.filter(c => c.name.toLowerCase().indexOf
          (action.searchText.toLowerCase()) > -1)});
}

function storeCourses(state, action): IAppState {
  return Object.assign({}, state, {
    courses: action.courses,
    filteredCourses: action.courses
  });
}

export function reducer(state= initialState, action) {
  switch (action.type) {
    case FILTER_COURSES:
      return filterC(state, action);
    case REQUEST_ALL_COURSES:
      return storeCourses(state, action);
    default:
      return state;
  }
}
