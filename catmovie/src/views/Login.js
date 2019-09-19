/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 15:43:28
 * @LastEditTime: 2019-08-13 16:27:13
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Login extends Component {
    state={name:'',pwd:''}
    render() {
        let {name,pwd}=this.state
        return (
            <>
                <form onSubmit={this.submitFn} method='post'>
                    <p>Login</p>
                    <input type='text' value={name} onChange={
                        (e)=>{
                            this.setState({name:e.target.value})
                        }
                    } />
                    <input type='password' value={pwd} onChange={
                        (e)=>{
                            this.setState({pwd:e.target.value})
                        }
                    }/>
                    <button type='submit'>登陆</button>
                </form>
            </>
        );
    }
    //提交 存本地
    submitFn=(e)=>{
        console.log(e)
        e.preventDefault();
        let {name,pwd}=this.state 
        if(name&&pwd){
            localStorage.user=name
            this.props.history.goBack()
        }else{
            alert('数据不完整！')
        }
    }
}

export default Login;