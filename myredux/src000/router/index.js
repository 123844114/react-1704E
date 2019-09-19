/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 11:20:18
 * @LastEditTime: 2019-08-20 11:47:17
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {HashRouter} from 'react-router-dom'
import RouterView from './routerView'
import routerList from './routerList'
import Header from '../components/Header'
import Footer from '../components/Footer'
class index extends Component {
    render() {
        return (
            <HashRouter>
                <Header/>
                <span className='iconfont icon-dingdan'></span>
                <RouterView routes={routerList}/>
                <Footer/>
            </HashRouter>
        );
    }
}

export default index;