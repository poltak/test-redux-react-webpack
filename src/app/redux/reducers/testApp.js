import views            from './views';
import showModalFilter  from './showModalFilter';
import { appInitState } from './initialState';

const modals = (state = appInitState, action) => {
  const viewsState = views(state, action);
  const showModalFilterState = showModalFilter(state.showModal, action);
  return {
    ...state,
    ...viewsState,
    showModal: showModalFilterState,
  };
};

export default modals;
