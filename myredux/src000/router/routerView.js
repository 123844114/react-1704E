/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 11:18:47
 * @LastEditTime: 2019-08-20 11:28:59
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {Switch,Route,Redirect} from 'react-router-dom'
const routerView=(props)=>{
    let {routes}=props
    return(
        <Switch>
            {
              routes.map((item,index)=>{
                  return  item.component?<Route key={index} path={item.path} render={(props)=>{
                    return <item.component routes={item.children} {...props}/>
                  }}></Route>
                  :<Redirect key={index}  to={item.redirect}/>
              })  
            }
        </Switch>
    )
}
export default routerView