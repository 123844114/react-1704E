/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 11:34:40
 * @LastEditTime: 2019-08-13 15:05:00
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { HashRouter, NavLink, Route, Redirect } from 'react-router-dom'
//引入视图组件
import Home from './Home'
import Detail from './Detail'
import Descover from './Descover'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Login from './Login'
import My from './My'
import '../css/style.css'
class index extends Component {
    render() {
        return (
            <div className='mafengwo'>
                <Header />
                <main className='main'>
                    <HashRouter>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/detail/:id' component={Detail}></Route>
                        <Route path='/discovery' component={Descover}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/my' component={My}></Route>
                    </HashRouter>
                </main>
                <Footer/>
            </div>
        );
    }
}

export default index;