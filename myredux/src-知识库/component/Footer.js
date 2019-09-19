/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 11:08:36
 * @LastEditTime: 2019-08-23 09:49:16
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
class Footer extends Component {
    render() {
        return (
            <div>
                <NavLink to='/zhishi'>知识库</NavLink>
                <NavLink to='/shequ'>社区</NavLink>
                <NavLink to='/my'>我的</NavLink>
            </div>
        );
    }
}

export default Footer;