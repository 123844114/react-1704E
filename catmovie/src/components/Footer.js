/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 15:33:13
 * @LastEditTime: 2019-08-14 17:08:08
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <footer>
                <NavLink to='/home/movie?title=电影'> 电影</NavLink>
                <NavLink to='/home/cinema?title=影院'> 影院</NavLink>
                <NavLink to='/home/my?title=我的'> 我的</NavLink>
            </footer>
        );
    }
}

export default Footer;