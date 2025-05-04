export const defaultStats = {
  totalGames: 0,
  highestScore: 0,
  longestDuration: 0,
  linesCleared: 0,
  recentScores: [],
};

export const getStats = () => {
  try {
    const stats = localStorage.getItem('tetrisStats');
    return stats ? JSON.parse(stats) : defaultStats;
  } catch (e) {
    /* eslint-disable no-console */
    console.error('Failed to load stats', e);
    /* eslint-enable no-console */
    return defaultStats;
  }
};

export const saveStats = (stats) => {
  try {
    localStorage.setItem('tetrisStats', JSON.stringify(stats));
  } catch (e) {
    /* eslint-disable no-console */
    console.error('Failed to save stats', e);
    /* eslint-enable no-console */
  }
};
