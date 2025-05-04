Run #1

1. Store.js Errors                                                                                                                                                  

                                                                                                                                                                    
ERROR in ./src/store.js                                                                                                                                             
  8:20  error  Missing trailing comma                                                                                                                               
  14:3   error  Unexpected dangling '_' in '__REDUX_DEVTOOLS_EXTENSION__'                                                                                           
  14:42  error  Unexpected dangling '_' in '__REDUX_DEVTOOLS_EXTENSION__'                                                                                           
  19:3   error  'saveStats' is not defined                                                                                                                          
                                                                                                                                                                    

Fix Plan:                                                                                                                                                           

                                                                                                                                                                    
// 1. Add trailing comma:                                                                                                                                           
const initialState = {                                                                                                                                              
  // ... existing state ...                                                                                                                                         
  stats: getStats(), // Add comma here                                                                                                                              
};                                                                                                                                                                  
                                                                                                                                                                    
// 2. Disable underscore rule for Redux DevTools:                                                                                                                   
/* eslint-disable no-underscore-dangle */                                                                                                                           
const store = createStore(                                                                                                                                          
  rootReducer,                                                                                                                                                      
  fromJS(initialState),                                                                                                                                             
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()                                                                                      
);                                                                                                                                                                  
/* eslint-enable no-underscore-dangle */                                                                                                                            
                                                                                                                                                                    
// 3. Import saveStats:                                                                                                                                             
import { getStats, saveStats } from './unit/stats';                                                                                                                 
                                                                                                                                                                    

2. Unit/stats.js Error                                                                                                                                              

                                                                                                                                                                    
ERROR in ./src/unit/stats.js                                                                                                                                        
  8:21  error  Missing trailing comma                                                                                                                               
                                                                                                                                                                    

Fix Plan:                                                                                                                                                           

                                                                                                                                                                    
export const getStats = () => {                                                                                                                                     
  const stats = localStorage.getItem('tetrisStats');                                                                                                                
  return stats ? JSON.parse(stats) : {                                                                                                                              
    totalGames: 0,                                                                                                                                                  
    highestScore: 0,                                                                                                                                                
    longestDuration: 0,                                                                                                                                             
    linesCleared: 0,                                                                                                                                                
    recentScores: [], // Add trailing comma here                                                                                                                    
  };                                                                                                                                                                
};                                                                                                                                                                  
                                                                                                                                                                    

3. Control/states.js Errors                                                                                                                                         

                                                                                                                                                                    
ERROR in ./src/control/states.js                                                                                                                                    
  22:19  error  'unit' is not defined                                                                                                                               
  23:20  error  Caution: `actions` also has a named export `updateTotalGames`                                                                                       
  38:19  error  'unit' is not defined                                                                                                                               
  39:20  error  Caution: `actions` also has a named export `updateLinesCleared`                                                                                     
  65:19  error  'unit' is not defined                                                                                                                               
  66:20  error  Caution: `actions` also has a named export `updateHighestScore`                                                                                     
  67:20  error  Caution: `actions` also has a named export `updateLongestDuration`                                                                                  
                                                                                                                                                                    

Fix Plan:                                                                                                                                                           

                                                                                                                                                                    
// 1. Add missing imports at top:                                                                                                                                   
import unit from '../unit'; // Add this                                                                                                                             
import { updateTotalGames, updateLinesCleared, updateHighestScore, updateLongestDuration } from '../actions'; // Add this                                           
                                                                                                                                                                    
// 2. Replace dispatch calls like:                                                                                                                                  
store.dispatch(actions.updateTotalGames(...));                                                                                                                      
// With:                                                                                                                                                            
store.dispatch(updateTotalGames(...));                                                                                                                              
                                                                                                                                                                    

4. Reducers/index.js Errors                                                                                                                                         

                                                                                                                                                                    
ERROR in ./src/reducers/index.js                                                                                                                                    
  18:19  error  Parse errors in imported module './stats': Unexpected token ... (16:16)                                                                             
  18:19  error  Parse errors in imported module './stats': Unexpected token ... (16:16)                                                                             
                                                                                                                                                                    

Fix Plan: This suggests a Babel/ESLint configuration issue. We need to:                                                                                             

 1 Ensure @babel/preset-env is in .babelrc                                                                                                                          
 2 Add transform-object-rest-spread plugin if needed                                                                                                                

5. Actions/index.js Errors                                                                                                                                          

                                                                                                                                                                    
ERROR in ./src/actions/index.js                                                                                                                                     
  112:44  error  Missing trailing comma                                                                                                                             
  117:14  error  Missing trailing comma                                                                                                                             
  122:14  error  Missing trailing comma                                                                                                                             
  127:17  error  Missing trailing comma                                                                                                                             
  132:14  error  Missing trailing comma                                                                                                                             
  137:15  error  Missing trailing comma                                                                                                                             
                                                                                                                                                                    

Fix Plan: Add trailing commas to all action exports:                                                                                                                

                                                                                                                                                                    
export const toggleStats = () => ({                                                                                                                                 
  type: reducerType.STATS_TOGGLE_VISIBILITY, // Add comma                                                                                                           
});                                                                                                                                                                 
                                                                                                                                                                    
// Repeat for all other action creators                                                                                                                             
                                                                                                                                                                    

6. Reducers/stats/index.js Error                                                                                                                                    

                                                                                                                                                                    
ERROR in ./src/reducers/stats/index.js                                                                                                                              
  16:16  error  Parsing error: Unexpected token ..                                                                                                                  
                                                                                                                                                                    

Fix Plan: This is likely due to missing Babel config for object spread. Solutions:                                                                                  

 1 Add @babel/plugin-proposal-object-rest-spread                                                                                                                    
 2 Or rewrite without spread (though not recommended):                                                                                                              

                                                                                                                                                                    
case reducerType.STATS_TOGGLE_VISIBILITY:                                                                                                                           
  return Object.assign({}, state, { visible: !state.visible });                                                                                                     
                                                                                                                                                                    

Run #2

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
1. Control/states.js Errors                                                                                                                                         

                                                                                                                                                                    
ERROR in ./src/control/states.js                                                                                                                                    
  3:10  error  'want' is defined but never used                                                                                                                     
  3:16  error  'isClear' is defined but never used                                                                                                                  
  3:25  error  'isOver' is defined but never used                                                                                                                   
  4:9   error  Trailing spaces not allowed                                                                                                                          
  6:22  error  Trailing spaces not allowed                                                                                                                          
  12:10  error  'speeds' is defined but never used                                                                                                                  
  12:18  error  'blankLine' is defined but never used                                                                                                               
  12:29  error  'blankMatrix' is defined but never used                                                                                                             
  12:42  error  'clearPoints' is defined but never used                                                                                                             
  12:55  error  'eachLines' is defined but never used                                                                                                               
  13:10  error  'music' is defined but never used                                                                                                                   
  14:8   error  'unit' is defined but never used                                                                                                                    
  16:5   error  'startTime' is defined but never used                                                                                                               
  18:7   error  'getStartMatrix' is assigned a value but never used                                                                                                 
  24:1   error  Trailing spaces not allowed                                                                                                                         
  27:37  error  'stats' is not defined                                                                                                                              
  33:39  error  'stats' is not defined                                                                                                                              
  39:48  error  'stats' is not defined                                                                                                                              
  39:68  error  'state' is not defined                                                                                                                              
  40:51  error  'stats' is not defined                                                                                                                              
  40:74  error  'duration' is not defined                                                                                                                           
  41:27  error  'state' is not defined                                                                                                                              
  41:51  error  'stats' is not defined                                                                                                                              
                                                                                                                                                                    

Root Cause:                                                                                                                                                         

 • Unused imports and variables due to incomplete refactoring                                                                                                       
 • Missing variable declarations in functions                                                                                                                       
 • Trailing whitespace                                                                                                                                              

Fix Plan:                                                                                                                                                           

                                                                                                                                                                    
// 1. Clean up imports (remove unused ones):                                                                                                                        
import { List } from 'immutable';                                                                                                                                   
import store from '../store';                                                                                                                                       
import {                                                                                                                                                            
  updateTotalGames,                                                                                                                                                 
  updateLinesCleared,                                                                                                                                               
  updateHighestScore,                                                                                                                                               
  updateLongestDuration,                                                                                                                                            
  updateRecentScores                                                                                                                                                
} from '../actions';                                                                                                                                                
import { clearPoints, eachLines } from '../unit/const'; // Only keep used imports                                                                                   
                                                                                                                                                                    
// 2. Add missing declarations:                                                                                                                                     
states.start = () => {                                                                                                                                              
  const stats = unit.getStats(); // Add this line                                                                                                                   
  const state = store.getState(); // Add this line                                                                                                                  
  // ... rest of code ...                                                                                                                                           
};                                                                                                                                                                  
                                                                                                                                                                    
states.overStart = () => {                                                                                                                                          
  const state = store.getState(); // Add this line                                                                                                                  
  const stats = unit.getStats(); // Add this line                                                                                                                   
  const duration = Math.floor((Date.now() - startTime) / 1000); // Add this line                                                                                    
  // ... rest of code ...                                                                                                                                           
};                                                                                                                                                                  
                                                                                                                                                                    
// 3. Remove trailing whitespace (lines 4, 6, 24)                                                                                                                   
                                                                                                                                                                    

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
2. Unit/stats.js Error                                                                                                                                              

                                                                                                                                                                    
ERROR in ./src/unit/stats.js                                                                                                                                        
  11:11  error  Parsing error: Unexpected token {                                                                                                                   
                                                                                                                                                                    

Root Cause:                                                                                                                                                         

 • Syntax error in try-catch block                                                                                                                                  

Fix Plan:                                                                                                                                                           

                                                                                                                                                                    
export const getStats = () => {                                                                                                                                     
  try { // Add space after 'try'                                                                                                                                    
    const stats = localStorage.getItem('tetrisStats');                                                                                                              
    return stats ? JSON.parse(stats) : defaultStats;                                                                                                                
  } catch (e) { // Add error parameter                                                                                                                              
    return defaultStats;                                                                                                                                            
  }                                                                                                                                                                 
};                                                                                                                                                                  
                                                                                                                                                                    

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
3. Actions/index.js Errors                                                                                                                                          

                                                                                                                                                                    
ERROR in ./src/actions/index.js                                                                                                                                     
  1:10  error  'getNextType' is defined but never used                                                                                                              
  3:8   error  'Block' is defined but never used                                                                                                                    
  4:8   error  'keyboard' is defined but never used                                                                                                                 
                                                                                                                                                                    

Root Cause:                                                                                                                                                         

 • Unused imports after refactoring                                                                                                                                 

Fix Plan:                                                                                                                                                           

                                                                                                                                                                    
// Remove unused imports:                                                                                                                                           
import * as reducerType from '../unit/reducerType';                                                                                                                 
                                                                                                                                                                    
// Keep only used imports                                                                                                                                           
export const toggleStats = () => ({ /* ... */ });                                                                                                                   
// ... other action creators ...                                                                                                                                    
                                                                                                                                                                    

Run #3

1. Unit/stats.js Errors                                                                                                                                             

                                                                                                                                                                    
ERROR in ./src/unit/stats.js                                                                                                                                        
   6:19  error    Missing trailing comma        comma-dangle                                                                                                        
  22:5   warning  Unexpected console statement  no-console                                                                                                          
                                                                                                                                                                    

Fix Plan:                                                                                                                                                           

                                                                                                                                                                    
// 1. Add trailing comma:                                                                                                                                           
export const defaultStats = {                                                                                                                                       
  totalGames: 0,                                                                                                                                                    
  highestScore: 0,                                                                                                                                                  
  longestDuration: 0,                                                                                                                                               
  linesCleared: 0,                                                                                                                                                  
  recentScores: [], // Add comma here                                                                                                                               
};                                                                                                                                                                  
                                                                                                                                                                    
// 2. Remove console.error or disable rule:                                                                                                                         
export const saveStats = (stats) => {                                                                                                                               
  try {                                                                                                                                                             
    localStorage.setItem('tetrisStats', JSON.stringify(stats));                                                                                                     
  } catch (e) {                                                                                                                                                     
    /* eslint-disable no-console */                                                                                                                                 
    console.error('Failed to save stats', e);                                                                                                                       
    /* eslint-enable no-console */                                                                                                                                  
  }                                                                                                                                                                 
};                                                                                                                                                                  
                                                                                                                                                                    

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
2. Control/states.js Errors                                                                                                                                         

                                                                                                                                                                    
ERROR in ./src/control/states.js                                                                                                                                    
   3:9   error  Trailing spaces not allowed                      no-trailing-spaces                                                                                 
   8:21  error  Missing trailing comma                           comma-dangle                                                                                       
  24:20  error  'actions' is not defined                         no-undef                                                                                           
  25:11  error  'startLines' is assigned a value but never used  no-unused-vars                                                                                     
  26:20  error  'actions' is not defined                         no-undef                                                                                           
  27:20  error  'actions' is not defined                         no-undef                                                                                           
  38:42  error  'blankLine' is not defined                       no-undef                                                                                           
  40:20  error  'actions' is not defined                         no-undef                                                                                           
  41:20  error  'actions' is not defined                         no-undef                                                                                           
  42:20  error  'actions' is not defined                         no-undef                                                                                           
  44:20  error  'actions' is not defined                         no-undef                                                                                           
  46:20  error  'actions' is not defined                         no-undef                                                                                           
  52:20  error  'actions' is not defined                         no-undef                                                                                           
  64:20  error  'actions' is not defined                         no-undef                                                                                           
  65:20  error  'actions' is not defined                         no-undef                                                                                           
  66:20  error  'actions' is not defined                         no-undef                                                                                           
  67:4   error  Missing trailing comma                           comma-dangle                                                                                       
                                                                                                                                                                    

Root Cause:                                                                                                                                                         

 • Missing imports for actions and blankLine                                                                                                                        
 • Undefined variables due to incomplete refactoring                                                                                                                
 • Trailing space and comma issues                                                                                                                                  

Fix Plan:                                                                                                                                                           

                                                                                                                                                                    
// 1. Add missing imports at top:                                                                                                                                   
import * as actions from '../actions'; // Add this                                                                                                                  
import { blankLine } from '../unit/const'; // Add this                                                                                                              
                                                                                                                                                                    
// 2. Remove unused startLines assignment:                                                                                                                          
// Delete line: const startLines = state.get('startLines');                                                                                                         
                                                                                                                                                                    
// 3. Add trailing commas:                                                                                                                                          
const initialState = {                                                                                                                                              
  // ... existing state ...                                                                                                                                         
  stats: getStats(), // Add comma here                                                                                                                              
};                                                                                                                                                                  
                                                                                                                                                                    
// 4. Remove trailing spaces (line 3)                                                                                                                               
                                                                                                                                                                    

────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
3. Actions/index.js Errors                                                                                                                                          

                                                                                                                                                                    
ERROR in ./src/actions/index.js                                                                                                                                     
   4:44  error  Missing trailing comma  comma-dangle                                                                                                                
   9:14  error  Missing trailing comma  comma-dangle                                                                                                                
  14:14  error  Missing trailing comma  comma-dangle                                                                                                                
  19:17  error  Missing trailing comma  comma-dangle                                                                                                                
  24:14  error  Missing trailing comma  comma-dangle                                                                                                                
  29:15  error  Missing trailing comma  comma-dangle                                                                                                                
  38:21  error  Missing trailing comma  comma-dangle                                                                                                                
                                                                                                                                                                    

Fix Plan:                                                                                                                                                           

                                                                                                                                                                    
export const toggleStats = () => ({                                                                                                                                 
  type: reducerType.STATS_TOGGLE_VISIBILITY, // Add comma                                                                                                           
});                                                                                                                                                                 
                                                                                                                                                                    
export const updateTotalGames = (count) => ({                                                                                                                       
  type: reducerType.UPDATE_TOTAL_GAMES,                                                                                                                             
  data: count, // Add comma                                                                                                                                         
});                                                                                                                                                                 
                                                                                                                                                                    
// Repeat for all other action creators...                                                                                                                          
                           


Plan for Fixing Toggle Button

Your connect() is missing the critical toggleStats action:                                                                                                   

                                                                                                                                                             
export default connect(                                                                                                                                      
  state => ({                                                                                                                                                
    // ... existing props ...                                                                                                                                
    stats: state.get('stats')  // ✅ stats prop exists                                                                                                       
  }),                                                                                                                                                        
  {                                                                                                                                                          
    // ❌ Missing toggleStats in mapDispatchToProps                                                                                                          
    // Need to add:                                                                                                                                          
    toggleStats                                                                                                                                              
  }                                                                                                                                                          
)(Game);                                          