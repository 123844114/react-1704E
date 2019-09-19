/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 16:29:06
 * @LastEditTime: 2019-08-14 17:12:16
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { BrowserRouter,HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import routeList from './routerList'
import RouterView from './routerView'
import Header from '../components/Header'
import '../style/style.scss'
const Router = () => {
    return (
        <div className='catmovie'>
            <HashRouter>
                <Header />
                <RouterView route={routeList} />
            </HashRouter>
        </div>

    )
}
export default Router