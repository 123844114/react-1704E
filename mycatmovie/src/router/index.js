/*
 * @Description: In User Settings Ed
 * @Author: your name
 * @Date: 2019-08-12 16:26:19
 * @LastEditTime: 2019-08-13 14:25:26
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from 'react'
import routes from './router-list'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import RouterView from './router-view'
const Router = () => {
    return (
        <HashRouter>
            <RouterView routes={routes}/>
        </HashRouter>
    )
}
export default Router