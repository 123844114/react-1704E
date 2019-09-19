/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 11:20:38
 * @LastEditTime: 2019-08-22 11:33:04
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {NavLink,BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import SheQu1 from './shequ/SheQu1'
import DaRen from './shequ/DaRen'
class SheQu extends Component {
    render() {
        return (
            <div className='shequ'>
                <p className='bar'>
                    <NavLink to='/shequ/shequ'>社区</NavLink>
                    <NavLink to='/shequ/daren'>达人</NavLink>
                </p>
                <Switch>
                    <Route path='/shequ/shequ' component={SheQu1}/>
                    <Route path='/shequ/daren' component={DaRen}/>
                    <Redirect from='/shequ' to='/shequ/shequ'></Redirect>
                </Switch>
            </div>
        );
    }
}

export default SheQu;