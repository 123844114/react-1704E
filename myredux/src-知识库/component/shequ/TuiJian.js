/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 14:33:34
 * @LastEditTime: 2019-08-22 15:03:11
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class TuiJian extends Component {
    render() {
        let {list,currentIndex,tabFn}=this.props
        return (
            <>
                <h1>圈子推荐</h1>
                {
                    list.map((item,index)=><span key={index} className={currentIndex===index?'active':null} onClick={tabFn.bind(null,index)}>{item.type}</span>)
                }
            </>
        );
    }

}

export default TuiJian;
