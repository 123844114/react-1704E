/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 10:34:18
 * @LastEditTime: 2019-08-20 11:02:30
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import qs from 'querystring'
console.log(qs)
class Login extends Component {
    render() {
        return (
            <div>
                login
                <button onClick={this.goToHome}>跳到home页</button>
            </div>
        );
    }
    goToHome=()=>{
        let obj={name:'tom',age:90}
        console.log(JSON.stringify(obj))
        this.props.history.push({
            pathname:'/home',
            state:{name:'jim',age:18},
            hash:'#123',
            search:'?'+qs.stringify(obj)
        })
    }
}

export default Login;