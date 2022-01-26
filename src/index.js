import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// const logger = function({dispatch, getState}){
//   return function (next){
//     return function(action){
//       console.log("ACTION_TYPE: ",action.type );
//       next(action);
//     }

//   }
// }
const logger = ({dispatch, getState}) => (next) => (action) => {
      
  if(typeof action !== 'function'){
  console.log("ACTION_TYPE: ",action.type );
  }
  next(action);

};


// const thunk =({dispatch, getState}) => (next) => (action) => {

//   if(typeof action === 'function'){
//     action(dispatch);
//     return;
//   }
//   next(action);
// };
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name:'Superman'}]
// });



ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);


