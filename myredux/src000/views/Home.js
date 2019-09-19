/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 10:34:05
 * @LastEditTime: 2019-08-20 10:56:23
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import qs from 'querystring'
class Home extends Component {
    render() {
       
        let {location:{search}}=this.props
        console.log(qs.parse(search.slice(1)))
        return (
            <div>
                home
            </div>
        );
    }
}

export default Home;