import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from '../reducers';

const devTools = window.devToolsExtension ? window.devToolsExtension() : undefined;

const store = createStore(reducers, {}, devTools, applyMiddleware(thunk));

export default store;