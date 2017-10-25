import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TabBar } from 'antd-mobile';

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab'
        };
    }

    render() {
        return (
            <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="#eee">
                <TabBar.Item title="微博" key="微博"
                             icon={<Link to="/app"><i className="iconfont">&#xe69e;</i></Link>}
                             selectedIcon={<i className="iconfont" style={{color:'#f64e45'}}>&#xe69e;</i>}
                             selected={this.state.selectedTab === 'blueTab'}
                             onPress={() => {
                                 this.setState({
                                     selectedTab: 'blueTab',
                                 });
                             }}
                >
                </TabBar.Item>
                <TabBar.Item title="TodoList" key="TodoList"
                             icon={<Link to='/app/todo'><i className="iconfont">&#xe6fc;</i></Link>}
                             selectedIcon={<i className="iconfont" style={{color:'#f64e45'}}>&#xe6fc;</i>}
                             selected={this.state.selectedTab === 'greenTab'}
                             onPress={() => {
                                 this.setState({
                                     selectedTab: 'greenTab',
                                 });
                             }}
                >
                </TabBar.Item>
                <TabBar.Item title="我的" key="我的"
                             icon={<Link to='/app/my'><i className="iconfont">&#xe70b;</i></Link>}
                             selectedIcon={<i className="iconfont" style={{color:'#f64e45'}}>&#xe70b;</i>}
                             selected={this.state.selectedTab === 'redTab'}
                             onPress={() => {
                                 this.setState({
                                     selectedTab: 'redTab',
                                 });
                             }}
                >
                </TabBar.Item>
            </TabBar>
        );
    }
}

export default MainMenu;