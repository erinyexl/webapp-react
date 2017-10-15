import { createStore, combineReducers  } from 'redux';

let dataObj={
    isShowTask:0,
    datetime:"2017 10/10 星期二 Saturday",
    todoList:[
        {
            type:0,
            state:"完成",
            title:"000完成TodoList的主要功能",
            des:"主要包括：创建新任务、修改任务，样式可以先放放。",
            created:"12:09"
        },
        {
            type:1,
            state:"一般",
            title:"111TodoList的",
            des:"主要包括",
            created:"12:09"
        },
        {
            type:2,
            state:"推迟",
            title:"222完成TodoList的",
            des:"主要包括：创建新任务。",
            created:"12:09"
        }
    ],
    todoTypeChecked:[
        "#cf98f3",
        "#F97B91",
        "#84C3F8",
        "#ABE08E",
        "#FCDB7A",
        "#BCC4C6"
    ]
};

// Reducer
let taskReducer = (state=dataObj.isShowTask, action) => {
    switch(action.type){
        case 'SHOW_TASK':
            return 1;
        default:
            return 0;
    }
};

let datetimeReducer = (state=dataObj.datetime, action) => {
    return state;
};

let listReducer = (state=dataObj.todoList, action) => {
    switch(action.type){
        case "ADD_NEW_TASK":
            return action.newList.concat(state);
        default:
            return state;
    }
};

let typeReducer = (state=dataObj.todoTypeChecked, action) => {
    return state;
};

const todoReducer = combineReducers({
    taskReducer,
    datetimeReducer,
    listReducer,
    typeReducer
});

const store = createStore(todoReducer);

export default store;