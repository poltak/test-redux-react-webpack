import {
  SHOW_MODAL,
  HIDE_MODAL,
} from './actionTypes';

export const showModal = (viewName, time = new Date()) => {
  return {
    type:         SHOW_MODAL,
    currentView:  viewName,
    showModal:    true,
    enterTime:    time,
    leaveTime:    null,
  };
};

export const hideModal = (viewName, time = new Date()) => {
  return {
    type:         HIDE_MODAL,
    currentView:  viewName,
    showModal:    false,
    enterTime:    null,
    leaveTime:    time,
  };
};
