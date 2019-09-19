/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 08:30:55
 * @LastEditTime: 2019-08-15 08:37:37
 * @LastEditors: Please set LastEditors
 */
import React,{Component}from 'react'
import Home from '../views/Home'
import Detail from '../views/Detail'
import My from '../views/My'
let routes=[
    {
        path:'/home',
        component:Home
    },{
       path:'/detail/:id',
       component:Detail 
    },{
        path:'/my',
        component:My 
     }
     ,{
        path:null,
        redirect:'/home'
     }
]
export default routes