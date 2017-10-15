import React, { Component } from 'react';
import { DatePicker, List } from 'antd-mobile';
import moment from 'moment';
import 'moment/locale/zh-cn';

const zhNow = moment().locale('zh-cn').utcOffset(8);

class Test extends Component {
    state = {
        date: zhNow
    }
    onChange = (date) => {
        // console.log('onChange', date);
        this.setState({
            date,
        });
    }
    render() {
        return (
            <List className="date-picker-list">
                <DatePicker className="forss" mode="datetime" onChange={this.onChange} value={this.state.date}>
                    <List.Item arrow="horizontal"></List.Item>
                </DatePicker>
            </List>
        );
    }
}

export default Test;