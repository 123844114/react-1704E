/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 19:55:20
 * @LastEditTime: 2019-08-20 15:54:30
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Index from './router'
import './style.scss'
import './font/iconfont.css'
import {Provider} from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Index/>
      </Provider>
    );
  }
}

export default App;
