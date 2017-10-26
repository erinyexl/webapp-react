import { combineReducers } from 'redux';

let todoType=[
    "#cf98f3",
    "#F97B91",
    "#84C3F8",
    "#ABE08E",
    "#FCDB7A",
    "#BCC4C6"
];

// Reducer
let taskReducer = (state=0, action) => {
    switch(action.type){
        case 'SHOW_TASK':
            return 1;
        default:
            return 0;
    }
};

let datetimeReducer = (state="2017 10/10 星期二 Saturday", action) => {
    return state;
};

let listReducer = (state=[], action) => {
    switch (action.type) {
        case 'FETCH':
            console.log('获取数据前');
            return state;
        case 'RECEIVE':
            console.log('已获取到数据:');
            console.log(action.payload);
            return action.payload;
        default:
            return state
    }
};

let typeReducer = (state=todoType, action) => {
    return state;
};

const todoReducer = combineReducers({
    taskReducer,
    datetimeReducer,
    listReducer,
    typeReducer
});

export default todoReducer;