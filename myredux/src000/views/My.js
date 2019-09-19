/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 11:16:01
 * @LastEditTime: 2019-08-20 11:34:15
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import RouterView from '../router/routerView'
class My extends Component {
    render() {
        console.log(this.props)
        let {routes}=this.props
        return (
            <div>
                my
               <RouterView routes={routes}/>
            </div>
        );
    }
}

export default My;