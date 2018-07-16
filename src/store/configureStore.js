import { createStore, applyMiddleware, compose } from 'redux';

import reduxThunk from 'redux-thunk';

import rootReducer from '../reducers';

const composeEnhancers = window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(reduxThunk)
  )
);

export default configureStore;
