/*
 * @Description: In User Settings Editc
 
 * @Author: your name
 * @LastEditTime: 2019-08-14 16:50:00
 * @LastEditors: Please set LastEditors13 15:33:07
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Header extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='header'>
                头部
            </div>
        );
    }
}

export default withRouter(Header)