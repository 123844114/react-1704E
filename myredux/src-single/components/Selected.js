/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 09:08:38
 * @LastEditTime: 2019-08-15 09:11:18
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Selected extends Component {
    render() {
        let {list}=this.props
        return (
            <div>
                {
                    list.map((item,index)=>{
                        return <button key={index}>{item.name}</button>
                    })
                }
            </div>
        );
    }
}

export default Selected;