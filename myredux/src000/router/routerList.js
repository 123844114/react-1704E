/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 11:04:20
 * @LastEditTime: 2019-08-20 11:33:55
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Home from '../views/Home'
import Category from '../views/Category'
import Store from '../views/Store'
import Shop from '../views/Shop'
import Login from '../views/Login'
import My from '../views/My'
import My1 from '../views/my/My1'
import My2 from '../views/my/My2'
const routerList = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/store',
        component: Store
    },
    {
        path: '/shop',
        component: Shop
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/my',
        component: My,
        children:[
            {
                path:'/my/my1',
                component:My1
            },
            {
                path:'/my/my2',
                component:My2
            }
        ]
    }, {
        path: null,
        redirect: '/home'
    }
]
export default routerList