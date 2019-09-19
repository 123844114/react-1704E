/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 15:38:29
 * @LastEditTime: 2019-08-14 11:48:06
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import wrapWithLogin from '../utils/wrapWithLogin'
class My extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                My
            </div>
        );
    }
}

export default wrapWithLogin(My);