import React, { Component } from 'react';
import { TabBar, Icon } from 'antd-mobile';
import Weibo from './Weibo';
import TodoList from './TodoList';

class TabBarExample extends Component {
    constructor(props) {
        super(props);
        this.clickHiddenHandle=this.clickHiddenHandle.bind(this);
        this.state = {
            selectedTab: 'blueTab',
            hidden: false
        };
    }
    clickHiddenHandle(ev){
        ev.preventDefault();
        this.setState({
            hidden: !this.state.hidden,
        });
    }

    renderContent(pageText) {
        let page = null;
        switch(pageText){
            case 'Weibo':
                page = <Weibo />;
            case 'TodoList':
                page = <TodoList />;
        }
        return (
            <div style={{ textAlign: 'center', color: '#fff' }}>
                <div style={{ paddingTop: 10 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
                <a onClick={this.clickHiddenHandle}>点击切换 tab-bar 显示/隐藏</a>
                <page />
            </div>
        );
    }

    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#eee"
                hidden={this.state.hidden}
            >
                <TabBar.Item
                    title="微博"
                    key="微博"
                    icon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />
                    }
                    selectedIcon={<div style={{
                        width: '0.44rem',
                        height: '0.44rem',
                        background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}
                    />
                    }
                    selected={this.state.selectedTab === 'blueTab'}
                    badge={1}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'blueTab',
                        });
                    }}
                    data-seed="logId"
                >
                    {this.renderContent('Weibo')}
                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon type="koubei-o" size="md" />}
                    selectedIcon={<Icon type="koubei" size="md" />}
                    title="口碑"
                    key="口碑"
                    badge={'new'}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'redTab',
                        });
                    }}
                    data-seed="logId1"
                >
                    {this.renderContent('口碑')}
                </TabBar.Item>
                <TabBar.Item
                    icon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
                    selectedIcon={
                        <div style={{
                            width: '0.44rem',
                            height: '0.44rem',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}
                        />
                    }
                    title="TodoList"
                    key="TodoList"
                    dot
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'greenTab',
                        });
                    }}
                >
                    {this.renderContent('TodoList')}
                </TabBar.Item>
                <TabBar.Item
                    icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                    selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                    title="我的"
                    key="我的"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'yellowTab',
                        });
                    }}
                >
                    {this.renderContent('我的')}
                </TabBar.Item>
            </TabBar>
        );
    }
}

export default TabBarExample;