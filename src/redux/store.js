import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middleware = [thunk];

// if(process.env.NODE_ENV === 'development'){
//     middleware.push(logger);
// } //For Debugging

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;