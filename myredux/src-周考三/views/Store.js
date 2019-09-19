/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 16:18:24
 * @LastEditTime: 2019-08-21 16:44:54
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Store extends Component {
    render() {
        let list = localStorage.storeList ? JSON.parse(localStorage.storeList) : []
        return (
            <div>
                {
                    list.map((item, index) => {
                        return <p key={index}>{item.title}</p>
                    })
                }
            </div>
        );
    }
}

export default Store;