import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider} from 'react-redux';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.css';
// import Cardlist from './Cardlist';
import App from './container/App';
import "tachyons"
import reportWebVitals from './reportWebVitals';
import { requestRobots, searchRobots } from './reducer';
// import { robots } from './robots';


const rootReducer = combineReducers({searchRobots,requestRobots});
const logger = createLogger();
const store = createStore(rootReducer,applyMiddleware(thunkMiddleware,logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store ={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();