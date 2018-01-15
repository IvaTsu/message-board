import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reducers from './Reducers/index';
import ListPosts from './Containers/ListPosts';
import registerServiceWorker from './registerServiceWorker';
import Login from './Components/Login';

const crateStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={crateStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <Switch>
                <Route path="/Login" component={Login} />
                <Route path="/" component={ListPosts} />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
