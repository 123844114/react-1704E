/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 16:35:20
 * @LastEditTime: 2019-08-13 13:44:49
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import MaFengWo from './views'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
