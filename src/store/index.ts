import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import history from '@/history';
import rootReducer from './reducers';

const store = applyMiddleware(routerMiddleware(history), thunk, promise, logger)(createStore)(rootReducer);

export default store;