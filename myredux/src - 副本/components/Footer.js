/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 09:35:30
 * @LastEditTime: 2019-08-17 09:39:48
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <div>
                <NavLink to='/home'>首页</NavLink>
                <NavLink to='/shop'>购物车</NavLink>
                <NavLink to='/store'>收藏</NavLink>
                <NavLink to='/my'>我的</NavLink>
            </div>
        );
    }
}

export default Footer;