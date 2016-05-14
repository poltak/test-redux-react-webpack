import { viewsInitState } from './initialState';
import {
  ENTER_HOME_VIEW,
  LEAVE_HOME_VIEW,

  ENTER_ABOUT_VIEW,
  LEAVE_ABOUT_VIEW,
} from '../actions/actionTypes';

const views = (state = viewsInitState, action) => {
  switch (action.type) {

    case ENTER_HOME_VIEW:
      // can't enter if you are already inside
      if (state.currentView !== action.currentView) {
        return {
          ...state,
          currentView:  action.currentView,
          enterTime:    action.enterTime,
          leaveTime:    action.leaveTime,
        };
      }
      return state;

    case LEAVE_HOME_VIEW:
      // can't leave if you aren't already inside
      if (state.currentView === action.currentView) {
        return {
          ...state,
          currentView:  action.currentView,
          enterTime:    action.enterTime,
          leaveTime:    action.leaveTime,
        };
      }
      return state;


    case ENTER_ABOUT_VIEW:
      // can't enter if you are already inside
      if (state.currentView !== action.currentView) {
        return {
          ...state,
          currentView:  action.currentView,
          enterTime:    action.enterTime,
          leaveTime:    action.leaveTime,
        };
      }
      return state;

    case LEAVE_ABOUT_VIEW:
      // can't leave if you aren't already inside
      if (state.currentView === action.currentView) {
        return {
          ...state,
          currentView:  action.currentView,
          enterTime:    action.enterTime,
          leaveTime:    action.leaveTime,
        };
      }
      return state;

    default:
      return state;
  }
};


export default views;
