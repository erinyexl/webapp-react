import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import './css/index.css';
// import 'antd-mobile/dist/antd-mobile.css';
import App from './App';
import Login from './script/Login';

ReactDOM.render((
    <Router>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/app" component={App} />
        </Switch>
    </Router>
    ),document.getElementById('root')
);

registerServiceWorker();
