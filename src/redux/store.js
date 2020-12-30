import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import app from './reducers/app';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  app
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;