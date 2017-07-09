import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import RouterMap from './router';

import './static/css/base.css';

render(
    <Provider store={store}>
        <RouterMap/>
    </Provider>,
    document.getElementById('app')
);