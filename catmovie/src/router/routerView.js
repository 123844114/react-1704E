/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 12:36:11
 * @LastEditTime: 2019-08-14 16:51:20
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, NavLink, Switch } from 'react-router-dom'
const RouterView = (props) => {
    let {route} = props
    return (
        <Switch>
            {
                route.map((item, index) => {
                    return item.component ? <Route key={index} path={item.path} render={(props) => {
                        // console.log(props)
                        return <item.component route={item.children} meta={{a:1}} {...props}  />
                    }}></Route> :
                        <Redirect key={index} from={item.path} to={item.redirect} />
                })
            }
        </Switch>
    )
}
export default RouterView
