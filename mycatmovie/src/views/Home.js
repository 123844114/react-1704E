/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 11:37:18
 * @LastEditTime: 2019-08-12 14:03:52
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Swiper from '../components/Swiper'
import List from '../components/List'

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <div className='home'>
                <Swiper />
                <List />
            </div>
        );
    }
}

export default Home;