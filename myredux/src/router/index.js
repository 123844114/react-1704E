/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 10:42:55
 * @LastEditTime: 2019-08-26 11:06:37
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import RouterView from './routerView'
import route from './routerList'
import { Provider } from 'react-redux'
import store from '../store'
class index extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <RouterView route={route} />
                </HashRouter>
            </Provider>
        );
    }
}

export default index;