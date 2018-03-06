import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import Reducers from './reducers';

let middleware = [
    ReduxThunk
];

if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, ReduxLogger];
}

export default createStore(
    Reducers,
    undefined,
    applyMiddleware(...middleware)
);