Run #1

ERROR in ./src/store.js

/home/aliaa/Files/Optomatica/Aider/react-tetris/src/store.js
   8:20  error  Missing trailing comma                                     comma-dangle
  14:3   error  Unexpected dangling '_' in '__REDUX_DEVTOOLS_EXTENSION__'  no-underscore-dangle
  14:42  error  Unexpected dangling '_' in '__REDUX_DEVTOOLS_EXTENSION__'  no-underscore-dangle
  19:3   error  'saveStats' is not defined                                 no-undef

✖ 4 problems (4 errors, 0 warnings)


ERROR in ./src/unit/stats.js

/home/aliaa/Files/Optomatica/Aider/react-tetris/src/unit/stats.js
  8:21  error  Missing trailing comma  comma-dangle

✖ 1 problem (1 error, 0 warnings)


ERROR in ./src/control/states.js

/home/aliaa/Files/Optomatica/Aider/react-tetris/src/control/states.js
   3:10  error  'want' is defined but never used                                                                                                                            no-unused-vars
   3:16  error  'isClear' is defined but never used                                                                                                                         no-unused-vars
   3:25  error  'isOver' is defined but never used                                                                                                                          no-unused-vars
   5:10  error  'speeds' is defined but never used                                                                                                                          no-unused-vars
   5:29  error  'blankMatrix' is defined but never used                                                                                                                     no-unused-vars
  10:25  error  'startLines' is defined but never used                                                                                                                      no-unused-vars
  22:19  error  'unit' is not defined                                                                                                                                       no-undef
  23:20  error  Caution: `actions` also has a named export `updateTotalGames`. Check if you meant to write `import {updateTotalGames} from '../actions'` instead            import/no-named-as-default-member
  38:19  error  'unit' is not defined                                                                                                                                       no-undef
  39:20  error  Caution: `actions` also has a named export `updateLinesCleared`. Check if you meant to write `import {updateLinesCleared} from '../actions'` instead        import/no-named-as-default-member
  65:19  error  'unit' is not defined                                                                                                                                       no-undef
  66:20  error  Caution: `actions` also has a named export `updateHighestScore`. Check if you meant to write `import {updateHighestScore} from '../actions'` instead        import/no-named-as-default-member
  67:20  error  Caution: `actions` also has a named export `updateLongestDuration`. Check if you meant to write `import {updateLongestDuration} from '../actions'` instead  import/no-named-as-default-member

✖ 13 problems (13 errors, 0 warnings)


ERROR in ./src/reducers/index.js

/home/aliaa/Files/Optomatica/Aider/react-tetris/src/reducers/index.js
  18:19  error  Parse errors in imported module './stats': Unexpected token ... (16:16)  import/no-named-as-default
  18:19  error  Parse errors in imported module './stats': Unexpected token ... (16:16)  import/no-named-as-default-member

✖ 2 problems (2 errors, 0 warnings)


ERROR in ./src/actions/index.js

/home/aliaa/Files/Optomatica/Aider/react-tetris/src/actions/index.js
  112:44  error  Missing trailing comma  comma-dangle
  117:14  error  Missing trailing comma  comma-dangle
  122:14  error  Missing trailing comma  comma-dangle
  127:17  error  Missing trailing comma  comma-dangle
  132:14  error  Missing trailing comma  comma-dangle
  137:15  error  Missing trailing comma  comma-dangle

✖ 6 problems (6 errors, 0 warnings)


ERROR in ./src/reducers/stats/index.js

/home/aliaa/Files/Optomatica/Aider/react-tetris/src/reducers/stats/index.js
  16:16  error  Parsing error: Unexpected token ..

✖ 1 problem (1 error, 0 warnings)


ERROR in ./src/reducers/stats/index.js
Module build failed: SyntaxError: Unexpected token (16:15)

  14 |   switch (action.type) {
  15 |     case reducerType.STATS_TOGGLE_VISIBILITY:
> 16 |       return { ...state, visible: !state.visible };
     |                ^
  17 |     case reducerType.UPDATE_TOTAL_GAMES:
  18 |       return { ...state, totalGames: action.data };
  19 |     case reducerType.UPDATE_HIGHEST_SCORE:


Run #2

ERROR in ./src/control/states.js

/home/aliaa/Files/Optomatica/Aider/react-tetris/src/control/states.js
   1:10  error  'List' is defined but never used                                                             no-unused-vars
   3:10  error  'want' is defined but never used                                                             no-unused-vars
   3:16  error  'isClear' is defined but never used                                                          no-unused-vars
   3:25  error  'isOver' is defined but never used                                                           no-unused-vars
   3:39  error  '/home/aliaa/Files/Optomatica/Aider/react-tetris/src/unit/index.js' imported multiple times  import/no-duplicates
   4:9   error  Trailing spaces not allowed                                                                  no-trailing-spaces
   6:22  error  Trailing spaces not allowed                                                                  no-trailing-spaces
  12:10  error  'speeds' is defined but never used                                                           no-unused-vars
  12:18  error  'blankLine' is defined but never used                                                        no-unused-vars
  12:29  error  'blankMatrix' is defined but never used                                                      no-unused-vars
  12:42  error  'clearPoints' is defined but never used                                                      no-unused-vars
  12:55  error  'eachLines' is defined but never used                                                        no-unused-vars
  13:10  error  'music' is defined but never used                                                            no-unused-vars
  14:8   error  'unit' is defined but never used                                                             no-unused-vars
  14:18  error  '/home/aliaa/Files/Optomatica/Aider/react-tetris/src/unit/index.js' imported multiple times  import/no-duplicates
  16:5   error  'startTime' is defined but never used                                                        no-unused-vars
  18:7   error  'getStartMatrix' is assigned a value but never used                                          no-unused-vars
  18:25  error  'startLines' is defined but never used                                                       no-unused-vars
  24:1   error  Trailing spaces not allowed                                                                  no-trailing-spaces
  27:37  error  'stats' is not defined                                                                       no-undef
  33:39  error  'stats' is not defined                                                                       no-undef
  39:48  error  'stats' is not defined                                                                       no-undef
  39:68  error  'state' is not defined                                                                       no-undef
  40:51  error  'stats' is not defined                                                                       no-undef
  40:74  error  'duration' is not defined                                                                    no-undef
  41:27  error  'state' is not defined                                                                       no-undef
  41:51  error  'stats' is not defined                                                                       no-undef

✖ 27 problems (27 errors, 0 warnings)


ERROR in ./src/unit/stats.js

/home/aliaa/Files/Optomatica/Aider/react-tetris/src/unit/stats.js
  11:11  error  Parsing error: Unexpected token {

✖ 1 problem (1 error, 0 warnings)


ERROR in ./src/unit/stats.js
Module build failed: SyntaxError: Unexpected token, expected ( (11:10)

   9 |       recentScores: [], // Add trailing comma here
  10 |     };
> 11 |   } catch {
     |           ^
  12 |     return {
  13 |       totalGames: 0,
  14 |       highestScore: 0,

 @ ./src/store.js 15:13-36

ERROR in ./src/actions/index.js

/home/aliaa/Files/Optomatica/Aider/react-tetris/src/actions/index.js
  1:10  error  'getNextType' is defined but never used  no-unused-vars
  3:8   error  'Block' is defined but never used        no-unused-vars
  4:8   error  'keyboard' is defined but never used     no-unused-vars

✖ 3 problems (3 errors, 0 warnings)


Run #3

ERROR in ./src/unit/stats.js

/home/aliaa/Files/Optomatica/Aider/react-tetris/src/unit/stats.js
   6:19  error    Missing trailing comma        comma-dangle
  22:5   warning  Unexpected console statement  no-console

✖ 2 problems (1 error, 1 warning)


ERROR in ./src/control/states.js

/home/aliaa/Files/Optomatica/Aider/react-tetris/src/control/states.js
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

✖ 17 problems (17 errors, 0 warnings)


ERROR in ./src/actions/index.js

/home/aliaa/Files/Optomatica/Aider/react-tetris/src/actions/index.js
   4:44  error  Missing trailing comma  comma-dangle
   9:14  error  Missing trailing comma  comma-dangle
  14:14  error  Missing trailing comma  comma-dangle
  19:17  error  Missing trailing comma  comma-dangle
  24:14  error  Missing trailing comma  comma-dangle
  29:15  error  Missing trailing comma  comma-dangle
  38:21  error  Missing trailing comma  comma-dangle

✖ 7 problems (7 errors, 0 warnings)