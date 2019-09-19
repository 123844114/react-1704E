/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 15:53:27
 * @LastEditTime: 2019-08-13 13:58:52
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink, Redirect, withRouter, Switch } from 'react-router-dom'
import '../assets/font/iconfont.css'
class Footer extends Component {
    state = {
        footerList: [
            {
                path: '/home',
                icon: 'icon-shouye',
                txt: '首页'
            },
            {

                path: '/discovery',
                icon: 'icon-faxian',
                txt: '发现'
            },
            {

                path: '/store',
                icon: 'icon-shoucang1',
                txt: '收藏'
            },
            {

                path: '/my',
                icon: 'icon-shoucang1',
                txt: '我的'
            }
        ]
    }
    render() {
        let { footerList } = this.state
        return (
            <div className='footer'>
                <Router>
                    {
                        footerList.map((item, index) => {
                            return (

                                <NavLink to={item.path} key={index}>
                                    <i className={`iconfont ${item.icon}`}></i>
                                    <p>{item.txt}</p>
                                </NavLink>

                            )
                        })
                    }
                </Router>
            </div>
        )
    }
}

export default Footer;