/*
 * @Description: In User Settings Edi
 * @Author: your name
 * @Date: 2019-08-15 13:44:21
 * @LastEditTime: 2019-08-16 15:19:20
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import SearchList from '../components/SearchList'
import BranceList from '../components/BranceList'
import { Provider } from 'react-redux'
import store from '../store'
import './index.scss'
class Index extends Component {
    render() {
        return <>
            <Provider store={store}>
                <SearchList />
                <BranceList />
            </Provider>
        </>
    }
}

export default Index