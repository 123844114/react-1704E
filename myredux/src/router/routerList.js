/*
 * @Description: In User Settings Editf
 * @Author: your name
 * @Date: 2019-08-26 10:43:06
 * @LastEditTime: 2019-08-29 13:56:36
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from 'react'
// import List from '../views/List'
// import Detail from '../views/Detail'
import Spinner from '../views/Spinner'
const List = React.lazy(() => import('../views/List'));
const Detail = React.lazy(() => import('../views/Detail'));
const list =[
    {
        path:'/list',
        component:props =>(
            <React.Suspense fallback={<Spinner />}>
              <List {...props} />
            </React.Suspense>
        )
    },
    {
        path:'/detail/:id',
        component:props => (
            <React.Suspense fallback={<Spinner />}>
              <Detail {...props} />
            </React.Suspense>
          )
    },
    {
        path:'/store',
        component:List
    },{
        path:'/',
        redirect:'/list'
    }
]
export default list