/*
 * @Description: In User Settings Edi
 * @Author: your name
 * @Date: 2019-08-15 13:44:21
 * @LastEditTime: 2019-08-15 17:11:59
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import SearchList from '../components/SearchList'
import BarList from '../components/BarList'
import './index.scss'
class Index extends Component {
    render() {
        return <>
            <SearchList />
            <BarList />
        </>
    }
}

export default Index