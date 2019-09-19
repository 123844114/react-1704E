/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 11:35:24
 * @LastEditTime: 2019-08-12 11:52:25
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Item from './Item'
import listJson from '../data/list.json'
class List extends Component {
    state = { listJson }
    render() {
        let { listJson } = this.state
        return (
            <div>
                {
                   listJson.map((item,index)=><Item key={index} item={item}/>)
                }
            </div>
        );
    }
    componentDidMount() {

    }
}

export default List;