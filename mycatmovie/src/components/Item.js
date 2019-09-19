/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 11:35:36
 * @LastEditTime: 2019-08-13 09:57:39
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom'
const url = require('url');
const qs=require('querystring') 
class Item extends Component {
    //跳详情
    state={
        name:'jim',
        age:19
    }
    toDetail = () => {
        let {history,item:{id}}=this.props
        history.push({
            pathname:`/detail/${id}`,
            query:{name:'jim'}
        })
    }
    render() {
        let {item} = this.props
        return (
            <div className='item' onClick={this.toDetail}>
                <h3>{item.title}</h3>
                <img src={item.img} style={{ width: '100px' }} />
            </div>
        );
    }
}

export default withRouter(Item);
