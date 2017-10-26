import { createStore, applyMiddleware  } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const store = createStore(
    reducer,
    applyMiddleware(thunk) //对store.dispatch()的功能增强
);

export default store;