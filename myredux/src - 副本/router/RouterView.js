/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 08:49:27
 * @LastEditTime: 2019-08-17 09:15:53
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import List from "./RouteList"

const router = (props) => {
    let { route } = props
    return (
        <Switch>
            {
                route.length && route.map((item,index)=>{
                    return item.component?<Route key={index} path={item.path} render={(props)=>{
                        return <item.component route={item.children} {...props}/>
                    }}></Route>
                        :<Redirect key={index} from={item.path} to={item.redirect}/>
                })
            }
        </Switch>
    )
}

export default router