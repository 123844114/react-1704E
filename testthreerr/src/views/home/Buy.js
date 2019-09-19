/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 20:35:55
 * @LastEditTime: 2019-08-21 10:55:00
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import data from '../../data/index.json'
import Item from '../../component/Item'
class Buy extends Component {
    state={list:data.products0}
    render() {
        let {list}=this.state
        return (
            <div>
               {
                   list.map((item,index)=><Item key={index} {...item}/>)
               }
            </div>
        );
    }
}

export default Buy;
