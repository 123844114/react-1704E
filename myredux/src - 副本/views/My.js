/*
 * @Description: In User Settings Edcc
 * @Author: your name
 * @Date: 2019-08-17 08:54:44
 * @LastEditTime: 2019-08-19 21:51:30
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import wrapWithLogin from '../utils/wrapWithLogin'
import qs from 'querystring'
console.log(qs)
class My extends Component {
    render() {
        return (
            <div>
                我的页面
                <button>跳到首页</button>
            </div>
        );
    }
}

export default wrapWithLogin(My);