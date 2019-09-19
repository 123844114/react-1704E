/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 10:37:28
 * @LastEditTime: 2019-08-21 10:37:58
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import Home from './views/Home'
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                     <Route path='/home' component={Home}/>
                     <Redirect to='/home'/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;