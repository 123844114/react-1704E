/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 10:43:14
 * @LastEditTime: 2019-08-26 10:55:26
 * @LastEditors: Please set LastEditors
 */
import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
const routerView=(props)=>{
    let {route} = props
    return (
        <Switch>
            {
                route.map((item,index)=>{
                    return item.component?<Route 
                    key={index}
                    path={item.path}
                    render={(props)=>{
                        return <item.component route={item.children} {...props}/>
                    }}
                    
                    />:<Redirect  key={index} from={item.path} to={item.redirect}/>
                })
            }
        </Switch>
    )
}
export default routerView
