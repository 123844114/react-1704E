/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 11:07:35
 * @LastEditTime: 2019-08-20 16:02:53
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

import LeftMenu from '../components/LeftMenu'
import RightMenu from '../components/RightMenu'
class Category extends Component {
    render() {
        return (
            <div className='list'>
                <LeftMenu />
                <RightMenu />
            </div>
        );
    }
}

export default Category