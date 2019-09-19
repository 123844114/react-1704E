/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 10:37:28
 * @LastEditTime: 2019-08-21 16:45:02
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import context from './utils/context'
import Home from './views/Home'
import Detail from './views/Detail'
import YouHui from './views/YouHui'
import Store from './views/Store'
import City from './views/City'
import data from './data/index.json'
class App extends Component {
    render() {
        return (
            <context.Provider value={data}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/home' component={Home} />
                        <Route path='/detail/:id' component={Detail} />
                        <Route path='/youhui' component={YouHui} />
                        <Route path='/store' component={Store} />
                        <Route path='/city' component={City} />
                        <Redirect to='/home' />
                    </Switch>
                </BrowserRouter>
            </context.Provider>
        );
    }
}

export default App;