/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 16:27:03
 * @LastEditTime: 2019-08-13 14:55:33
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {NavLink,HashRouter,Route} from 'react-router-dom'
//引入高阶组件
import wrapWithLogin from '../util/wrapWithLogin'
import Zi1 from './discovery/zi1'
import Zi2 from './discovery/zi2'
class Descover extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='discovery'>
               <h3>Discovery</h3>
               <p>
                    <NavLink to='/discovery/zi1'> 子路由一</NavLink>
                    <NavLink to='/discovery/zi2'> 子路由二</NavLink>
               </p>
               <div className='dis-con'>
                   <Route path='/discovery/zi1' component={Zi1} />
                   <Route path='/discovery/zi2' component={Zi2} />
               </div>
            </div>
        );
    }
}

export default wrapWithLogin(Descover);