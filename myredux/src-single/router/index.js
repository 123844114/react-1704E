/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 08:38:28
 * @LastEditTime: 2019-08-15 08:45:13
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from 'react'
import {BrowserRouter,Switch,Redirect} from 'react-router-dom'
import RouterView from './routerView'
import routerList from './routerList'
class Index extends Component{
    render(){
        return (
            <BrowserRouter>
                <RouterView route={routerList}/>
            </BrowserRouter>
        )
    }
}
export default Index