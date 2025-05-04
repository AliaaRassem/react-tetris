import { createStore } from 'redux';
import { fromJS } from 'immutable';
import rootReducer from './reducers';
import { getStats, saveStats } from './unit/stats';

const initialState = {
  // ... existing initial state ...
  stats: getStats(), // Add comma here
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  fromJS(initialState),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable no-underscore-dangle */

store.subscribe(() => {
  const state = store.getState();
  saveStats(state.get('stats').toJS());
  // ... existing persistence logic ...
});

export default store;
