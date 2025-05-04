import * as reducerType from '../unit/reducerType';

export const toggleStats = () => ({
  type: reducerType.STATS_TOGGLE_VISIBILITY,
});

export const updateTotalGames = (count) => ({
  type: reducerType.UPDATE_TOTAL_GAMES,
  data: count,
});

export const updateHighestScore = (score) => ({
  type: reducerType.UPDATE_HIGHEST_SCORE,
  data: score,
});

export const updateLongestDuration = (duration) => ({
  type: reducerType.UPDATE_LONGEST_DURATION,
  data: duration,
});

export const updateLinesCleared = (count) => ({
  type: reducerType.UPDATE_LINES_CLEARED,
  data: count,
});

export const updateRecentScores = (scores) => ({
  type: reducerType.UPDATE_RECENT_SCORES,
  data: scores,
});

export default {
  toggleStats,
  updateTotalGames,
  updateHighestScore,
  updateLongestDuration,
  updateLinesCleared,
  updateRecentScores,
};
