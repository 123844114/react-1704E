/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 13:44:21
 * @LastEditTime: 2019-08-16 14:45:00
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
