import { createStore, applyMiddleware  } from 'redux';
import todoReducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
    todoReducer,
    applyMiddleware(thunk) //对store.dispatch()的功能增强
);

export default store;