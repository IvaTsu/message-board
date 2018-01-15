import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reducers from './Reducers/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const crateStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={crateStoreWithMiddleware(reducers)}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
