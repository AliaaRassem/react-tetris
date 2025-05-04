import React from 'react';
import { connect } from 'react-redux';
import { toggleStats } from '../../actions';
import './style.css';

const StatsPanel = ({ stats, onClose }) => (
  <div className="stats-panel">
    <h2>Game Statistics</h2>
    <button onClick={onClose}>×</button>
    <div className="stat-item">
      <span>Total Games:</span>
      <span>{stats.totalGames}</span>
    </div>
    <div className="stat-item">
      <span>Highest Score:</span>
      <span>{stats.highestScore}</span>
    </div>
    <div className="stat-item">
      <span>Longest Duration:</span>
      <span>{stats.longestDuration}s</span>
    </div>
    <div className="stat-item">
      <span>Lines Cleared:</span>
      <span>{stats.linesCleared}</span>
    </div>
  </div>
);

export default connect(
  state => ({ stats: state.get('stats') }),
  { onClose: toggleStats }
)(StatsPanel);
