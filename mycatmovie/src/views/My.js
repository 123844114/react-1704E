/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 10:33:09
 * @LastEditTime: 2019-08-13 10:59:41
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

//实现高阶组件: 是一个函数，参数是组件，返回值新组件
import wrapWithLogin from '../util/wrapWithLogin'


class My extends Component {
    render() {
        return (
            <div>
                my
            </div>
        );
    }
}

export default wrapWithLogin(My);