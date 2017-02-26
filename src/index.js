import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'

import { App } from './component';
import reducers from './reducer';

const createStoreWithMiddleware = applyMiddleware()(createStore);
render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App/>
    </Provider>, document.getElementById('app')
)
