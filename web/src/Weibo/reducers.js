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

export default listReducer;