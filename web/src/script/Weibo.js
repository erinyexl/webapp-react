import React, { Component } from 'react';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import '../css/Weibo.less';

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log('onChange', key);
}
function handleTabClick(key) {
    console.log('onTabClick', key);
}
const TabExample = () => (
    <section className="weibo_main">
        <Tabs defaultActiveKey="1" onChange={callback} onTabClick={handleTabClick}>
            <TabPane tab={<Badge text={'3'}>全部</Badge>} key="1">
                <div className="weibo_main_content">
                    Content of First Tab
                </div>
            </TabPane>
            <TabPane tab={<Badge text={'今日(20)'}>我的微博</Badge>} key="2">
                <div className="weibo_main_content">
                    Content of Second Tab
                </div>
            </TabPane>
            <TabPane tab={<Badge dot>Third Tab</Badge>} key="3">
                <div className="weibo_main_content">
                    Content of Third Tab
                </div>
            </TabPane>
        </Tabs>
        <WhiteSpace />
    </section>
);


class EditModule extends Component{
    render(){
        return(
            <section className="edit_wrap">
                <p className="edit_title">有什么新鲜事？</p>
                <textarea name="" id="" cols="30" rows="3" className="edit_teatarea"></textarea>
                <div className="edit_info">
                    <a href="javascript:void(0);" className="edit_send_btn">发 表</a>
                </div>
            </section>
        )
    }
}

class Weibo extends Component{
    render(){
        return(
            <div id="weibo">
                <EditModule />
                <TabExample />
            </div>
        )
    }
}

export default Weibo;