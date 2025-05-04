import { List } from 'immutable';
import * as reducerType from '../../unit/reducerType';

const initialState = {
  visible: false,
  totalGames: 0,
  highestScore: 0,
  longestDuration: 0,
  linesCleared: 0,
  recentScores: List(),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case reducerType.STATS_TOGGLE_VISIBILITY:
      return Object.assign({}, state, { visible: !state.visible });
    case reducerType.UPDATE_TOTAL_GAMES:
      return Object.assign({}, state, { totalGames: action.data });
    case reducerType.UPDATE_HIGHEST_SCORE:
      return Object.assign({}, state, { highestScore: action.data });
    case reducerType.UPDATE_LONGEST_DURATION:
      return Object.assign({}, state, { longestDuration: action.data });
    case reducerType.UPDATE_LINES_CLEARED:
      return Object.assign({}, state, { linesCleared: action.data });
    case reducerType.UPDATE_RECENT_SCORES:
      return Object.assign({}, state, { recentScores: List(action.data) });
    default:
      return state;
  }
};
