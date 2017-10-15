import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import '../css/Login.less';

const customHistory = createBrowserHistory();

class Login extends Component{
    constructor(){
        super();
        this.loginHandle=this.loginHandle.bind(this);
    }
    loginHandle(ev){
        ev.preventDefault();
        let name=this.refs.userNameValue.value;
        let password=this.refs.passwordValue.value;
        console.log(name+" , "+password);
        customHistory.push("/app");
        customHistory.go();
    }
    render(){
        return(
            <div id="loginForm">
                <section className="login_wrap">
                    <div className="login_title"><strong>COBRA</strong> | Martial art supplies</div>

                    <div className="login_item_area">
                        <div className="login_item">
                            <i className="iconfont login_item_icon">&#xe70b;</i>
                            <input type="text" ref="userNameValue" placeholder="用户名" className="input_username" />
                        </div>
                        <div className="login_item">
                            <i className="iconfont login_item_icon">&#xe82b;</i>
                            <input type="password" ref="passwordValue" placeholder="密码" className="input_password" />
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
                </section>
                <div className="sign_up">
                    <span>还没有账号？</span>
                    <a className="goto_sign" href="">去注册</a>
                </div>
            </div>
        )
    }
}

export default Login;