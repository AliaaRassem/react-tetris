Modified Files                                                                                                                                             

 1 src/unit/reducerType.js (modified file)                                                                                                                 

                                                                                                                                                           
export const PAUSE = 'PAUSE';                                                                                                                              
export const MUSIC = 'MUSIC';                                                                                                                              
// ... existing types ...                                                                                                                                  
                                                                                                                                                           
// New stats-related types                                                                                                                                 
export const STATS_TOGGLE_VISIBILITY = 'STATS_TOGGLE_VISIBILITY';                                                                                          
export const UPDATE_TOTAL_GAMES = 'UPDATE_TOTAL_GAMES';                                                                                                    
export const UPDATE_HIGHEST_SCORE = 'UPDATE_HIGHEST_SCORE';                                                                                                
export const UPDATE_LONGEST_DURATION = 'UPDATE_LONGEST_DURATION';                                                                                          
export const UPDATE_RECENT_SCORES = 'UPDATE_RECENT_SCORES';                                                                                                
export const UPDATE_LINES_CLEARED = 'UPDATE_LINES_CLEARED';                                                                                                
                                                                                                                                                           

 2 src/reducers/index.js (modified file)                                                                                                                   

                                                                                                                                                           
import { combineReducers } from 'redux-immutable';                                                                                                         
import stats from './stats';  // New import                                                                                                                
// ... other imports ...                                                                                                                                   
                                                                                                                                                           
const rootReducer = combineReducers({                                                                                                                      
  // ... existing reducers ...                                                                                                                             
  stats,  // New reducer                                                                                                                                   
});                                                                                                                                                        
                                                                                                                                                           
export default rootReducer;                                                                                                                                
                                                                                                                                                           

 3 src/actions/index.js (modified file)                                                                                                                    

                                                                                                                                                           
// Add to imports                                                                                                                                          
import * as reducerType from '../unit/reducerType';                                                                                                        
                                                                                                                                                           
// Add these new exports                                                                                                                                   
export const toggleStats = () => ({                                                                                                                        
  type: reducerType.STATS_TOGGLE_VISIBILITY                                                                                                                
});                                                                                                                                                        
                                                                                                                                                           
export const updateTotalGames = (count) => ({                                                                                                              
  type: reducerType.UPDATE_TOTAL_GAMES,                                                                                                                    
  data: count                                                                                                                                              
});                                                                                                                                                        
                                                                                                                                                           
// ... similar for other stat actions ...                                                                                                                  
                                                                                                                                                           

 4 src/control/states.js (modified file)                                                                                                                   

                                                                                                                                                           
// Add to start():                                                                                                                                         
states.start = () => {                                                                                                                                     
  const stats = unit.getStats();                                                                                                                           
  store.dispatch(actions.updateTotalGames(stats.totalGames + 1));                                                                                          
  // ... rest of start logic ...                                                                                                                           
};                                                                                                                                                         
                                                                                                                                                           
// Add to clearLines():                                                                                                                                    
states.clearLines = (matrix, lines) => {                                                                                                                   
  const stats = unit.getStats();                                                                                                                           
  store.dispatch(actions.updateLinesCleared(stats.linesCleared + lines.length));                                                                           
  // ... rest of clearLines logic ...                                                                                                                      
};                                                                                                                                                         
                                                                                                                                                           

───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
New Files                                                                                                                                                  

 1 src/reducers/stats/index.js (new file)                                                                                                                  

                                                                                                                                                           
import { List } from 'immutable';                                                                                                                          
import * as reducerType from '../../unit/reducerType';                                                                                                     
                                                                                                                                                           
const initialState = {                                                                                                                                     
  visible: false,                                                                                                                                          
  totalGames: 0,                                                                                                                                           
  highestScore: 0,                                                                                                                                         
  longestDuration: 0,                                                                                                                                      
  linesCleared: 0,                                                                                                                                         
  recentScores: List()                                                                                                                                     
};                                                                                                                                                         
                                                                                                                                                           
export default (state = initialState, action) => {                                                                                                         
  switch (action.type) {                                                                                                                                   
    case reducerType.STATS_TOGGLE_VISIBILITY:                                                                                                              
      return { ...state, visible: !state.visible };                                                                                                        
    case reducerType.UPDATE_TOTAL_GAMES:                                                                                                                   
      return { ...state, totalGames: action.data };                                                                                                        
    case reducerType.UPDATE_HIGHEST_SCORE:                                                                                                                 
      return { ...state, highestScore: action.data };                                                                                                      
    case reducerType.UPDATE_LONGEST_DURATION:                                                                                                              
      return { ...state, longestDuration: action.data };                                                                                                   
    case reducerType.UPDATE_LINES_CLEARED:                                                                                                                 
      return { ...state, linesCleared: action.data };                                                                                                      
    case reducerType.UPDATE_RECENT_SCORES:                                                                                                                 
      return { ...state, recentScores: List(action.data) };                                                                                                
    default:                                                                                                                                               
      return state;                                                                                                                                        
  }                                                                                                                                                        
};                                                                                                                                                         
                                                                                                                                                           

 2 src/components/stats/StatsPanel.js (new file)                                                                                                           

                                                                                                                                                           
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
    {/* Other stat items similarly */}                                                                                                                     
  </div>                                                                                                                                                   
);                                                                                                                                                         
                                                                                                                                                           
export default connect(                                                                                                                                    
  state => ({ stats: state.get('stats') }),                                                                                                                
  { onClose: toggleStats }                                                                                                                                 
)(StatsPanel);                                                                                                                                             
                                                                                                                                                           

 3 src/components/stats/style.css (new file)                                                                                                               

                                                                                                                                                           
.stats-panel {                                                                                                                                             
  position: fixed;                                                                                                                                         
  top: 20px;                                                                                                                                               
  right: 20px;                                                                                                                                             
  background: white;                                                                                                                                       
  padding: 20px;                                                                                                                                           
  border-radius: 5px;                                                                                                                                      
  box-shadow: 0 0 10px rgba(0,0,0,0.2);                                                                                                                    
  z-index: 1000;                                                                                                                                           
}                                                                                                                                                          
                                                                                                                                                           
.stat-item {                                                                                                                                               
  display: flex;                                                                                                                                           
  justify-content: space-between;                                                                                                                          
  margin: 10px 0;                                                                                                                                          
}                                                                                                                                                          
                                                                                                                                                           

 4 src/unit/stats.js (new file)                                                                                                                            

                                                                                                                                                           
export const getStats = () => {                                                                                                                            
  const stats = localStorage.getItem('tetrisStats');                                                                                                       
  return stats ? JSON.parse(stats) : {                                                                                                                     
    totalGames: 0,                                                                                                                                         
    highestScore: 0,                                                                                                                                       
    longestDuration: 0,                                                                                                                                    
    linesCleared: 0,                                                                                                                                       
    recentScores: []                                                                                                                                       
  };                                                                                                                                                       
};                                                                                                                                                         
                                                                                                                                                           
export const saveStats = (stats) => {                                                                                                                      
  localStorage.setItem('tetrisStats', JSON.stringify(stats));                                                                                              
};                                                                                                                                                         
                                                                                                                                                           


Integartion Files  
1. src/components/game/index.js (Add Stats Button)                                                                                                         

                                                                                                                                                           
// Add to imports:                                                                                                                                         
import { toggleStats } from '../../actions';                                                                                                               
import StatsPanel from '../stats/StatsPanel';                                                                                                              
                                                                                                                                                           
// Add to render() method (near other control buttons):                                                                                                    
render() {                                                                                                                                                 
  return (                                                                                                                                                 
    <div className={style.game}>                                                                                                                           
      {/* Existing game components... */}                                                                                                                  
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
                                                                                                                                                           
// Add to connect:                                                                                                                                         
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
                                                                                                                                                           

───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
2. src/store.js (Initialize Stats)                                                                                                                         

                                                                                                                                                           
// Add to imports:                                                                                                                                         
import { getStats } from './unit/stats';                                                                                                                   
                                                                                                                                                           
// Modify store creation:                                                                                                                                  
const initialState = {                                                                                                                                     
  // ... existing state ...                                                                                                                                
  stats: getStats() // Load from localStorage                                                                                                              
};                                                                                                                                                         
                                                                                                                                                           
const store = createStore(                                                                                                                                 
  rootReducer,                                                                                                                                             
  fromJS(initialState),                                                                                                                                    
  // ... rest of store setup ...                                                                                                                           
);                                                                                                                                                         
                                                                                                                                                           
// Add to store.subscribe() for persistence:                                                                                                               
store.subscribe(() => {                                                                                                                                    
  const state = store.getState();                                                                                                                          
  saveStats(state.get('stats').toJS());                                                                                                                    
  // ... existing persistence logic ...                                                                                                                    
});                                                                                                                                                        
                                                                                                                                                           

───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
3. src/unit/index.js (Persistence Helpers)                                                                                                                 

                                                                                                                                                           
// Add these new methods to the exports:                                                                                                                   
const unit = {                                                                                                                                             
  // ... existing methods ...                                                                                                                              
                                                                                                                                                           
  getStats() {                                                                                                                                             
    const stats = localStorage.getItem('tetrisStats');                                                                                                     
    return stats ? JSON.parse(stats) : {                                                                                                                   
      totalGames: 0,                                                                                                                                       
      highestScore: 0,                                                                                                                                     
      longestDuration: 0,                                                                                                                                  
      linesCleared: 0,                                                                                                                                     
      recentScores: []                                                                                                                                     
    };                                                                                                                                                     
  },                                                                                                                                                       
                                                                                                                                                           
  saveStats(stats) {                                                                                                                                       
    localStorage.setItem('tetrisStats', JSON.stringify(stats));                                                                                            
  }                                                                                                                                                        
};                                                                                                                                                         
                                                                                                                                                           

───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
Additional CSS (New file: src/components/game/style.css)                                                                                                   

                                                                                                                                                           
/* Add to existing game styles */                                                                                                                          
.statsButton {                                                                                                                                             
  position: absolute;                                                                                                                                      
  top: 20px;                                                                                                                                               
  right: 20px;                                                                                                                                             
  padding: 8px 15px;                                                                                                                                       
  background: #4CAF50;                                                                                                                                     
  color: white;                                                                                                                                            
  border: none;                                                                                                                                            
  border-radius: 4px;                                                                                                                                      
  cursor: pointer;                                                                                                                                         
  z-index: 100;                                                                                                                                            
}                                                                                                                                                          
                                                                                                                                                           
.statsButton:hover {                                                                                                                                       
  background: #45a049;                                                                                                                                     
}                                                                                                                                                          

Missing/Incomplete Items:                                                                                                                                        

 1 Game Integration - Not yet implemented in states.js:                                                                                                             
    • Missing game start counter increment                                                                                                                          
    • Missing score/duration tracking on game over                                                                                                                  
    • Missing lines cleared tracking                                                                                                                                
 2 Store Initialization - store.js needs:                                                                                                                           
                                                                                                                                                                    
   // Add to store creation:                                                                                                                                        
   const initialState = {                                                                                                                                           
     // ... existing state ...                                                                                                                                      
     stats: getStats() // Load initial stats                                                                                                                        
   };                                                                                                                                                               
                                                                                                                                                                    
 3 Stats Button Integration - game/index.js needs:                                                                                                                  
                                                                                                                                                                    
   // Add to render():                                                                                                                                              
   <button onClick={this.props.toggleStats}>Stats</button>                                                                                                          
   {this.props.stats.visible && <StatsPanel />}                                                                                                                     
                                                                                                                                                                    
 4 Duration Tracking - Need to add in states.js:                                                                                                                    
                                                                                                                                                                    
   // Track game duration timer                                                                                                                                     
   let startTime;                                                                                                                                                   
   states.start = () => {                                                                                                                                           
     startTime = Date.now();                                                                                                                                        
     // ... existing start logic ...                                                                                                                                
   }                                      




⚠️ Minor Pending Items:                                                                                                                                             

 1 Recent Scores - While implemented, the recent scores array isn't being populated in states.js during game over:                                                  
                                                                                                                                                                    
   // Should add to overStart():                                                                                                                                    
   const recentScores = [state.get('points'), ...stats.recentScores].slice(0, 5);                                                                                   
   store.dispatch(actions.updateRecentScores(recentScores));                                                                                                        
                                                                                                                                                                    
 2 Duration Formatting - Could enhance display in StatsPanel.js:                                                                                                    
                                                                                                                                                                    
   // Change from:                                                                                                                                                  
   <span>{stats.longestDuration}s</span>                                                                                                                            
   // To:                                                                                                                                                           
   <span>{formatDuration(stats.longestDuration)}</span>                                                                                                             
                                                                                                                                                                    
 3 Error Handling - Missing localStorage error handling in stats.js:                                                                                                
                                                                                                                                                                    
   export const getStats = () => {                                                                                                                                  
     try {                                                                                                                                                          
       const stats = localStorage.getItem('tetrisStats');                                                                                                           
       return stats ? JSON.parse(stats) : defaultStats;                                                                                                             
     } catch {                                                                                                                                                      
       return defaultStats;                                                                                                                                         
     }                                                                                                                                                              
   };                                                                                                                                                               
                                                                                                                                                                    
