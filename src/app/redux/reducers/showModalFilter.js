import { showModalFilterInitState } from './initialState';
import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../actions/actionTypes';

const showModalFilter = (state = showModalFilterInitState, action) => {
  switch (action.type) {

    case SHOW_MODAL:
    case HIDE_MODAL:
      return action.showModal;

    default:
      return state;

  }
};

export default showModalFilter;
