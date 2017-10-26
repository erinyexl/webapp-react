import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import '../css/Login.less';
import '../css/animate-custom.css';

const customHistory = createBrowserHistory();

class Login extends Component{
    constructor(){
        super();
        this.loginHandle=this.loginHandle.bind(this);
    }
    loginHandle(ev){
        ev.preventDefault();
        // let username=this.refs.loginUserNameValue.value;
        // let password=this.refs.loginPasswordValue.value;
        //
        // fetch('/users/login',{
        //     method:'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body:JSON.stringify({
        //         username:username,
        //         password:password
        //     })
        // }).then(function(response){
        //     return response.json();
        // }).then(function(json){
        //     if(json.code==200){
                customHistory.push("/app");
                customHistory.go();
        //     }else{
        //         console.log('err');
        //     }
        // });
    }
    render(){
        return(
            <div>
                <a className="hiddenanchor" id="toregister">{}</a>
                <a className="hiddenanchor" id="tologin">{}</a>
                <div className="loginForm" id="wrapper">
                    <div id="login" className="animate">
                        <div className="login_wrap">
                            <div className="login_title"><strong>LOG IN</strong> | Martial art supplies</div>

                            <div className="login_item_area">
                                <div className="login_item">
                                    <i className="iconfont login_item_icon">&#xe70b;</i>
                                    <input type="text" ref="loginUserNameValue" placeholder="用户名" className="input_username" />
                                </div>
                                <div className="login_item">
                                    <i className="iconfont login_item_icon">&#xe82b;</i>
                                    <input type="password" ref="loginPasswordValue" placeholder="密码" className="input_password" />
                                </div>
                            </div>

                            <div className="login_keep">
                                <input type="checkbox" id="checkbox" hidden />
                                <label htmlFor="checkbox" />
                                <span>记住密码</span>
                            </div>

                            <Link to='/app' className="login_submit" onClick={this.loginHandle}>登 录</Link>
                            <a className="txtcolor" href="">忘记密码?</a>

                            <div className="login_sign">
                                <i className="iconfont login_sign_icon">&#xe605;</i>
                            </div>
                        </div>
                        <div className="sign_up">
                            <span>还没有账号？</span>
                            <a className="goto_sign" href="#toregister">去注册</a>
                        </div>
                    </div>
                    <div id="register" className="animate">
                        <div className="login_wrap">
                            <div className="login_title"><strong>SIGN UP</strong> | Martial art supplies</div>

                            <div className="login_item_area">
                                <div className="login_item">
                                    <i className="iconfont login_item_icon">&#xe70b;</i>
                                    <input type="text" ref="regUserNameValue" placeholder="用户名" className="input_username" />
                                </div>
                                <div className="login_item">
                                    <i className="iconfont login_item_icon">&#xe82b;</i>
                                    <input type="password" ref="regPasswordValue" placeholder="密码" className="input_password" />
                                </div>
                                <div className="login_item">
                                    <i className="iconfont login_item_icon">&#xe82b;</i>
                                    <input type="password" ref="regPasswordValueAgain" placeholder="再次输入密码" className="input_password" />
                                </div>
                            </div>

                            <Link to='/app' className="login_submit" onClick={this.loginHandle}>注 册</Link>
                            <div className="login_sign">
                                <i className="iconfont login_sign_icon">&#xe605;</i>
                            </div>
                        </div>
                        <div className="sign_up">
                            <span>已有账号？</span>
                            <a className="goto_sign" href="#tologin">去登录</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;