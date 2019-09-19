/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 14:43:26
 * @LastEditTime: 2019-08-23 11:46:42
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Item from './Item'
class SqList extends Component {
    render() {
        let {list}=this.props
        return (
            <div>
                <h1>最新</h1>
                {
                    list&&list.map((item,index)=><Item key={index} {...item}/>)
                }
            </div>
        );
    }
    componentDidUpdate(){
        console.log('父更新')
    }
}

export default SqList;