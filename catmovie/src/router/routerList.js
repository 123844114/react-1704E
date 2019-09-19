/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 12:34:03
 * @LastEditTime: 2019-08-14 17:05:37
 * @LastEditors: Please set LastEditors
 */
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from '../views/Home'
import Detail from '../views/Detail'
import Login from '../views/Login'
import Search from '../views/Search'
import Movie from '../views/Movie'
import Cinema from '../views/Cinema'
import My from '../views/My'
import Hot from '../views/movie/hot'
import Ing from '../views/movie/ing'
let routeList=[
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/movie',
                component:Movie,
                meta: {
                    title: '电影'
                },
                children:[
                    {
                        path:'/home/movie/hot',
                        component:Hot,
                        meta:{isFlag:true}
                    },{
                        path:'/home/movie/ing',
                        component:Ing
                    },{
                        path:'/home/movie',
                        redirect:'/home/movie/hot'
                    }
                ]
            },
            {
                path:'/home/cinema',
                meta: {
                    title: '影院'
                },
                component:Cinema
            },
            {
                path:'/home/my',
                meta: {
                    title: '我的'
                },
                component:My
            }
        ]
    },{
        path:'/detail/:id',
        component:Detail 
    },{
        path:'/login',
        component:Login 
    },{
        path:'/search',
        component:Search 
    },{
        path:null,
        redirect:'/home/movie/hot'
    }
]
export default routeList