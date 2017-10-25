import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './TodoList/store';

import MainMenu from './script/MainMenu';
import Weibo from './script/Weibo';
import TodoList from './TodoList/views/TodoList';
import MyCenter from "./script/MyCenter";

const routes = [
    {
        path: '/app',
        exact: true,
        main: () => <Weibo />
    },
    {
        path: '/app/todo',
        main: () => <Provider store={store}><TodoList /></Provider>
    },
    {
        path: '/app/my',
        main: () => <MyCenter />
    }
];

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <MainMenu />
                    <div>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.main}
                            />
                        ))}
                    </div>
                </div>
            </Router>
        )
    }
}

export default App