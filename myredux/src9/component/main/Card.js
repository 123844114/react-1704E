/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 10:19:07
 * @LastEditTime: 2019-08-24 10:44:53
 * @LastEditors: Please set LastEditors
 * 任务卡
 */
import React, { Component } from 'react';

class Card extends Component {
    render() {
        let {title,start_time,end_time,status,type} =this.props
        return (
            <div className='card' style={{borderTop:`2px solid ${status}`}}>
                <p>{title}</p>
                <span>开始时间：{start_time}</span>
                <span>结束时间{end_time}</span>
                <span>{type}</span>
            </div>
        );
    }
}

export default Card;
