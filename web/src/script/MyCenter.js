import React, { Component } from 'react';
import '../css/MyCenter.less';

class MyCenter extends Component{
    componentWillMount(){

    }
    render(){
        return(
            <div id="myCenter">
                <header className="my_header">
                    <div className="avatar"></div>
                    <div className="name">Name default</div>
                </header>
                <CenterList />
            </div>
        )
    }
}

class CenterList extends Component {
    render(){
        return(
            <div className="my-list">
                <div className="my-list-body">
                    <div className="my-list-item">
                        <div className="my-list-line">
                            <div className="my-list-content">
                                <i className="my-list-icon iconfont">&#xe705;</i>
                                <span>个人主页</span>
                            </div>
                            <i className="my-list-arrow iconfont">&#xe65f;</i>
                        </div>
                    </div>
                    <div className="my-list-item">
                        <div className="my-list-line">
                            <div className="my-list-content">
                                <i className="my-list-icon iconfont">&#xe6ae;</i>
                                <span>设置</span>
                            </div>
                            <i className="my-list-arrow iconfont">&#xe65f;</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyCenter;