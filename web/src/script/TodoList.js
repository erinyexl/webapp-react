import React, { Component } from 'react';
import TestWrapper from './DatePicker';
import { connect } from 'react-redux';
import { showToast } from './Toast';
import '../css/TodoList.less';

// UI组件
class Todo extends Component {
    render() {
        return (
            <div id="TodoList">
                <Calendar {...this.props} />
                <MainList {...this.props}/>
                <Task {...this.props} />
            </div>
        );
    }
}

// Action
const showTaskAction={
    type:"SHOW_TASK"
};
const hideTaskAction={
    type:"HIDE_TASK"
};
const submitNewAction={
    type:"ADD_NEW_TASK",
    newList:[]
};



let mapStateToProps=(state)=>{
    return{
        isShowTask:state.taskReducer,
        datetime:state.datetimeReducer,
        todoList:state.listReducer,
        typeList:state.typeReducer
    }
};

let mapDispatchToProps=(dispatch)=>{
    return{
        showTaskHandle:()=>dispatch(showTaskAction),
        submitNewHandle:(data)=>{
            submitNewAction.newList=[];
            submitNewAction.newList.push(data);
            dispatch(submitNewAction);
            dispatch(hideTaskAction);
        },
        hideTaskHandle:()=>dispatch(hideTaskAction)
    }
};

const TodoList=connect(
    mapStateToProps,
    mapDispatchToProps
)(Todo);

// 列表区
class MainList extends Component{
    render(){
        const { todoList, showTaskHandle } = this.props;
        return(
            <div className="mainlist_wrap">
                <p className="head">代 办 事 项</p>
                <ul className="mainlist">
                    {
                        todoList.map((item,index)=>{
                            return(
                                <li key={index}>
                                    <span className="state">{item.state}</span>
                                    <div className="task_type">
                                        <div className="type_circle"></div>
                                        <div className="adorn_line"></div>
                                    </div>
                                    <div className="description">
                                        <p className="title">{item.title}</p>
                                        <p className="desc">{item.des}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="addbtn" onClick={showTaskHandle}>+</div>
            </div>
        )
    }
}

// 日历区
class Calendar extends Component{
    render(){
        const { datetime } = this.props;
        return(
            <section className="calender_wrap">
                <div className="calender_item item_left">
                    <p className="date">10/7</p>
                    <p className="week">星期六 Saturday</p>
                    <p className="year">2017</p>
                    <p className="year">{datetime}</p>
                </div>
                <div className="calender_item item_right">
                    <p>查看最近</p>
                    <ul className="alender_list">
                        <li>
                            <p>Sat</p>
                            <p>11</p>
                        </li>
                        <li>
                            <p>Sat</p>
                            <p>12</p>
                        </li>
                        <li>
                            <p>Sat</p>
                            <p>13</p>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
}

// 任务弹窗
class Task extends Component{
    constructor(props){
        super(props);
        this.addNewHandle=this.addNewHandle.bind(this);
    }
    addNewHandle(ev){
        const { submitNewHandle } = this.props;
        let title = this.refs.inputValue.value;
        let des = this.refs.textareaValue.value;
        if(!title){
            showToast("标题不能为空！");
            return;
        }
        let data = {
            type:0,
            title:title,
            des:des,
            created:"09:16"
        };
        submitNewHandle(data);
    }
    render(){
        const { isShowTask, typeList, hideTaskHandle } = this.props;
        if(!isShowTask){
            return null;
        }
        return(
            <div className="taskwrap">
                <div className="taskarea">
                    <i className="iconfont close_task" onClick={hideTaskHandle}>&#xe69a;</i>
                    <h4 className="titletxt">添加新任务</h4>
                    <section className="task_content">
                        <div className="form_item type">
                            <i className="iconfont">&#xe696;</i>
                            <span>任务类型</span>
                        </div>
                        <div className="form_item typelist">
                            {
                                typeList.map((item, index)=>{
                                    return <span key={index} type={index} style={{background:item}} />
                                })
                            }
                        </div>
                        <div className="form_item timechoose">
                            <i className="iconfont">&#xe6bf;</i>
                            <TestWrapper />
                        </div>
                        <div className="form_item tasktitle">
                            <i className="iconfont">&#xe705;</i>
                            <input ref="inputValue" placeholder="标题" type="text" name="" id="taskTitle"/>
                        </div>
                        <div className="form_item taskdes">
                            <i className="iconfont">&#xe74e;</i>
                            <textarea ref="textareaValue" placeholder="备注" id="taskDes" cols="30" rows="3" />
                        </div>
                    </section>
                    <div className="submitbtn" id="submitBtn" onClick={this.addNewHandle}><i className="iconfont">&#xe656;</i></div>
                </div>
            </div>
        )
    }
}


export default TodoList;

