import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './script/redux';

import './css/index.css';
import App from './App';
import Login from './script/Login';
import registerServiceWorker from './registerServiceWorker';

// fetch('/users/addUser?uid=4&name=helloMySQL').then(function(response) {
//     return response.json();
// }).then(function(json) {
//     console.log(json);
// });


ReactDOM.render((
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/app" component={App} />
            </Switch>
        </Router>
    </Provider>
    ),document.getElementById('root')
);

registerServiceWorker();
