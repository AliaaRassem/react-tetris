1. Define Action Types: We need new action types for tracking game start time, incrementing the game count, and updating the longest duration.                   

                                                                                                                                                                 
src/unit/const.js                                                                                                                                                
<<<<<<< SEARCH                                                                                                                                                   
  lan,                                                                                                                                                           
  i18n: i18n.data,                                                                                                                                               
};                                                                                                                                                               
=======                                                                                                                                                          
  lan,                                                                                                                                                           
  i18n: i18n.data,                                                                                                                                               
  // Statistics Action Types (Add these)                                                                                                                         
  GAME_START_TIME: 'GAME_START_TIME',                                                                                                                            
  INCREMENT_GAMES_PLAYED: 'INCREMENT_GAMES_PLAYED',                                                                                                              
  UPDATE_LONGEST_DURATION: 'UPDATE_LONGEST_DURATION',                                                                                                            
};                                                                                                                                                               
>>>>>>> REPLACE                                                                                                                                                  
                                                                                                                                                                 

2. Create Action Creators: Now, let's add the corresponding action creators in src/actions/index.js.                                                             

                                                                                                                                                                 
src/actions/index.js                                                                                                                                             
<<<<<<< SEARCH                                                                                                                                                   
import * as reducerType from '../unit/reducerType';                                                                                                              
import Block from '../unit/block';                                                                                                                               
import keyboard from './keyboard';                                                                                                                               
=======                                                                                                                                                          
import { getNextType } from '../unit';                                                                                                                           
import * as reducerType from '../unit/reducerType';                                                                                                              
import { GAME_START_TIME, INCREMENT_GAMES_PLAYED, UPDATE_LONGEST_DURATION } from '../unit/const'; // Import new types                                            
import Block from '../unit/block';                                                                                                                               
import keyboard from './keyboard';                                                                                                                               
>>>>>>> REPLACE                                                                                                                                                  
                                                                                                                                                                 

                                                                                                                                                                 
src/actions/index.js                                                                                                                                             
<<<<<<< SEARCH                                                                                                                                                   
  focus,                                                                                                                                                         
};                                                                                                                                                               
=======                                                                                                                                                          
  focus,                                                                                                                                                         
                                                                                                                                                                 
  // Statistics Actions (Add these)                                                                                                                              
  gameStartTime(data) {                                                                                                                                          
    return {                                                                                                                                                     
      type: GAME_START_TIME,                                                                                                                                     
      data,                                                                                                                                                      
    };                                                                                                                                                           
  },                                                                                                                                                             
                                                                                                                                                                 
  incrementGamesPlayed() {                                                                                                                                       
    return {                                                                                                                                                     
      type: INCREMENT_GAMES_PLAYED,                                                                                                                              
    };                                                                                                                                                           
  },                                                                                                                                                             
                                                                                                                                                                 
  updateLongestDuration(data) {                                                                                                                                  
    return {                                                                                                                                                     
      type: UPDATE_LONGEST_DURATION,                                                                                                                             
      data,                                                                                                                                                      
    };                                                                                                                                                           
  },                                                                                                                                                             
};                                                                                                                                                               
>>>>>>> REPLACE                                                                                                                                                  
                                                                                                                                                                 

3. Create Reducers: We need new reducers to handle these actions.                                                                                                

                                                                                                                                                                 
src/reducers/gameStartTime/index.js                                                                                                                              
<<<<<<< SEARCH                                                                                                                                                   
=======                                                                                                                                                          
import * as reducerType from '../../unit/reducerType'; // Assuming reducerType path                                                                              
import { GAME_START_TIME } from '../../unit/const';                                                                                                              
                                                                                                                                                                 
const initState = null; // Initial game start time is null                                                                                                       
                                                                                                                                                                 
const gameStartTime = (state = initState, action) => {                                                                                                           
  switch (action.type) {                                                                                                                                         
    case GAME_START_TIME:                                                                                                                                        
      return action.data;                                                                                                                                        
    default:                                                                                                                                                     
      return state;                                                                                                                                              
  }                                                                                                                                                              
};                                                                                                                                                               
                                                                                                                                                                 
export default gameStartTime;                                                                                                                                    
>>>>>>> REPLACE                                                                                                                                                  
                                                                                                                                                                 

                                                                                                                                                                 
src/reducers/totalGamesPlayed/index.js                                                                                                                           
<<<<<<< SEARCH                                                                                                                                                   
=======                                                                                                                                                          
import * as reducerType from '../../unit/reducerType'; // Assuming reducerType path                                                                              
import { INCREMENT_GAMES_PLAYED } from '../../unit/const';                                                                                                       
import { lastRecord } from '../../unit/const'; // To initialize from localStorage                                                                                
                                                                                                                                                                 
const initState = lastRecord ? (lastRecord.totalGamesPlayed || 0) : 0;                                                                                           
                                                                                                                                                                 
const totalGamesPlayed = (state = initState, action) => {                                                                                                        
  switch (action.type) {                                                                                                                                         
    case INCREMENT_GAMES_PLAYED:                                                                                                                                 
      return state + 1;                                                                                                                                          
    case reducerType.RESET: // Reset could potentially clear stats if needed, but let's keep them persistent for now.                                            
      return state; // Keep the count even on reset                                                                                                              
    default:                                                                                                                                                     
      return state;                                                                                                                                              
  }                                                                                                                                                              
};                                                                                                                                                               
                                                                                                                                                                 
export default totalGamesPlayed;                                                                                                                                 
>>>>>>> REPLACE                                                                                                                                                  
                                                                                                                                                                 

                                                                                                                                                                 
src/reducers/longestGameDuration/index.js                                                                                                                        
<<<<<<< SEARCH                                                                                                                                                   
=======                                                                                                                                                          
import * as reducerType from '../../unit/reducerType'; // Assuming reducerType path                                                                              
import { UPDATE_LONGEST_DURATION } from '../../unit/const';                                                                                                      
import { lastRecord } from '../../unit/const'; // To initialize from localStorage                                                                                
                                                                                                                                                                 
const initState = lastRecord ? (lastRecord.longestGameDuration || 0) : 0; // Duration in milliseconds                                                            
                                                                                                                                                                 
const longestGameDuration = (state = initState, action) => {                                                                                                     
  switch (action.type) {                                                                                                                                         
    case UPDATE_LONGEST_DURATION:                                                                                                                                
      // Only update if the new duration is longer                                                                                                               
      return action.data > state ? action.data : state;                                                                                                          
    case reducerType.RESET: // Reset could potentially clear stats if needed, but let's keep them persistent for now.                                            
       return state; // Keep the duration even on reset                                                                                                          
    default:                                                                                                                                                     
      return state;                                                                                                                                              
  }                                                                                                                                                              
};                                                                                                                                                               
                                                                                                                                                                 
export default longestGameDuration;                                                                                                                              
>>>>>>> REPLACE                                                                                                                                                  
                                                                                                                                                                 

4. Update Game Logic (src/control/states.js): Modify the start and overEnd functions to track time and dispatch actions.                                         

                                                                                                                                                                 
src/control/states.js                                                                                                                                            
<<<<<<< SEARCH                                                                                                                                                   
    if (music.start) {                                                                                                                                           
      music.start();                                                                                                                                             
    }                                                                                                                                                            
    const state = store.getState();                                                                                                                              
    states.dispatchPoints(0);                                                                                                                                    
=======                                                                                                                                                          
    if (music.start) {                                                                                                                                           
      music.start();                                                                                                                                             
    }                                                                                                                                                            
    const state = store.getState();                                                                                                                              
    // Record game start time and increment count                                                                                                                
    store.dispatch(actions.gameStartTime(Date.now()));                                                                                                           
    store.dispatch(actions.incrementGamesPlayed());                                                                                                              
                                                                                                                                                                 
    states.dispatchPoints(0);                                                                                                                                    
>>>>>>> REPLACE                                                                                                                                                  
                                                                                                                                                                 

                                                                                                                                                                 
src/control/states.js                                                                                                                                            
<<<<<<< SEARCH                                                                                                                                                   
  // 游戏结束动画完成                                                                                                                                            
  overEnd: () => {                                                                                                                                               
    store.dispatch(actions.matrix(blankMatrix));                                                                                                                 
    store.dispatch(actions.moveBlock({ reset: true }));                                                                                                          
=======                                                                                                                                                          
  // 游戏结束动画完成                                                                                                                                            
  overEnd: () => {                                                                                                                                               
    const state = store.getState();                                                                                                                              
    const startTime = state.get('gameStartTime');                                                                                                                
    const endTime = Date.now();                                                                                                                                  
                                                                                                                                                                 
    if (startTime) {                                                                                                                                             
      const duration = endTime - startTime;                                                                                                                      
      // Check if this game's duration is the longest                                                                                                            
      if (duration > state.get('longestGameDuration', 0)) { // Use default value 0 if not present                                                                
         store.dispatch(actions.updateLongestDuration(duration));                                                                                                
      }                                                                                                                                                          
    }                                                                                                                                                            
     // Clear start time for the next game                                                                                                                       
    store.dispatch(actions.gameStartTime(null));                                                                                                                 
                                                                                                                                                                 
    store.dispatch(actions.matrix(blankMatrix));                                                                                                                 
    store.dispatch(actions.moveBlock({ reset: true }));                                                                                                          
>>>>>>> REPLACE                                                                                                                                                  
                                                                                                                                                                 

5. Update localStorage Persistence (src/unit/index.js): The subscribeRecord function already stringifies the entire state, so the new statistics (gameStartTime, 
totalGamesPlayed, longestGameDuration) will be automatically included as long as they are added to the main Redux state tree. No changes are needed in           
src/unit/index.js itself for this step, but we need to ensure the new reducers are combined correctly.                                                           
