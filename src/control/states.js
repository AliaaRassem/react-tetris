import { List } from 'immutable';
import store from '../store';
import * as actions from '../actions';
import { blankLine, clearPoints, eachLines } from '../unit/const';
import unit from '../unit';

let startTime;

const states = {
  fallInterval: null,

  start: () => {
    startTime = Date.now();
    const stats = unit.getStats();
    const state = store.getState();
    store.dispatch(actions.updateTotalGames(stats.totalGames + 1));
    states.dispatchPoints(0);
    store.dispatch(actions.speedRun(state.get('speedStart')));
    store.dispatch(actions.moveBlock({ type: state.get('next') }));
    store.dispatch(actions.nextBlock());
    states.auto();
  },

  clearLines: (matrix, lines) => {
    const stats = unit.getStats();
    const state = store.getState();
    store.dispatch(actions.updateLinesCleared(stats.linesCleared + lines.length));
    let newMatrix = matrix;
    lines.forEach(n => {
      newMatrix = newMatrix.splice(n, 1);
      newMatrix = newMatrix.unshift(List(blankLine));
    });
    store.dispatch(actions.matrix(newMatrix));
    store.dispatch(actions.moveBlock({ type: state.get('next') }));
    store.dispatch(actions.nextBlock());
    states.auto();
    store.dispatch(actions.lock(false));
    const clearLines = state.get('clearLines') + lines.length;
    store.dispatch(actions.clearLines(clearLines));
    const addPoints = store.getState().get('points') + clearPoints[lines.length - 1];
    states.dispatchPoints(addPoints);
    const speedAdd = Math.floor(clearLines / eachLines);
    let speedNow = state.get('speedStart') + speedAdd;
    speedNow = speedNow > 6 ? 6 : speedNow;
    store.dispatch(actions.speedRun(speedNow));
  },

  overStart: () => {
    clearTimeout(states.fallInterval);
    const duration = Math.floor((Date.now() - startTime) / 1000);
    const state = store.getState();
    const stats = unit.getStats();
    store.dispatch(actions.updateHighestScore(Math.max(stats.highestScore, state.get('points'))));
    store.dispatch(actions.updateLongestDuration(Math.max(stats.longestDuration, duration)));
    const recentScores = [state.get('points'), ...stats.recentScores].slice(0, 5);
    store.dispatch(actions.updateRecentScores(recentScores));
    store.dispatch(actions.lock(true));
    store.dispatch(actions.reset(true));
    store.dispatch(actions.pause(false));
  },
};

export default states;
