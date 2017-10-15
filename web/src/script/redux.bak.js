import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

const DATAOBJ={
    count:0
};

// UI组件
class Counter extends Component {
    render() {
        const { value, onIncreaseClick } = this.props;
        return (
            <div>
                <span>{value}</span>
                <button onClick={onIncreaseClick}>Increase</button>
            </div>
        )
    }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncreaseClick: PropTypes.func.isRequired
};

// Action
const increaseAction = { type: 'increase' };

// Reducer算出新的state
function counter(state = DATAOBJ, action) {
    const count = state.count;
    switch (action.type) {
        case 'increase':
            return { count: count + 1 };
        default:
            return state
    }
}

// Store
const store = createStore(counter);

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        value: state.count
    }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        // 用户操作view发出action
        onIncreaseClick: () => dispatch(increaseAction)
    }
}

// 通过connect方法把UI组件和容器组件连接起来，生成新组件App
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
