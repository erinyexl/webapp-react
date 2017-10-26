// action creator
// 以前是返回一个action对象，现在利用中间件返回一个函数？
const fetchPosts = (url) => (dispatch, getState) => {
    dispatch({type:'FETCH',payload:[{title:'fetching'}]});
    return fetch(url)
        .then(res => res.json())
        .then(json => {
            dispatch({type:'RECEIVE',payload:json})
        });
};

export {
    fetchPosts
}