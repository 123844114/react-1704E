/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 08:33:51
 * @LastEditTime: 2019-08-15 08:54:54
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from 'react'
import {BrowserRouter,Switch,Redirect,Route} from 'react-router-dom'
let RouterView=(props)=>{
    let {route}=props
    return (
        <Switch>
            {
                route.map((item,index)=>{
                    return item.component?<Route key={index} path={item.path} render={(props)=>{
                        return <item.component route={item.children} {...props}></item.component>
                    }}></Route>:<Redirect key={index} from={item.path} to={item.redirect}></Redirect>
                })
            }
        </Switch>
    )
}
export default RouterView