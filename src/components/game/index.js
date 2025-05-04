import React from 'react';
import { connect } from 'react-redux';
import { toggleStats } from '../../actions';
import StatsPanel from '../stats/StatsPanel';
import style from './style.css';

class Game extends React.Component {
  // ... existing component code ...

  render() {
    return (
      <div className={style.game}>
        {/* Existing game components */}
        <button 
          className={style.statsButton}
          onClick={this.props.toggleStats}
        >
          Stats
        </button>
        {this.props.stats.visible && <StatsPanel />}
      </div>
    );
  }
}

export default connect(
  state => ({
    // ... existing props ...
    stats: state.get('stats')
  }),
  {
    // ... existing actions ...
    toggleStats
  }
)(Game);
