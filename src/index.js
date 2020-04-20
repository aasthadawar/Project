import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import {Provider} from 'react-redux';
import CasesReducer from './store/Reducers/CasesReducer';
import thunk from 'redux-thunk';
import CountriesReducer from './store/Reducers/CountriesReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import GraphReducer from '../src/store/Reducers/GraphReducer';
import NewCaseReducer from '../src/store/Reducers/NewCasesReducer';
import NewsReducer from '../src/store/Reducers/NewsReducer';
import tweetsReducer from './store/Reducers/TweetsReducer';


const rootReducer=combineReducers({
    cas:CasesReducer,
    cou:CountriesReducer,
    newCas:NewCaseReducer,
    graph:GraphReducer,
    newsR:NewsReducer,
    tweet:tweetsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
))

ReactDOM.render(

  <Provider store={store}>
  
  
    <App/>
   
    
  </Provider>
  
  ,
  document.getElementById('root')
);

