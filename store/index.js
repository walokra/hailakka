import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers';

const middleware = [thunkMiddleware];

const middlewareEnhancer = applyMiddleware(...middleware);

const enhancers = [middlewareEnhancer];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(...enhancers);

export default createStore(reducer, {}, composedEnhancers);
