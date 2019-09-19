/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 13:12:06
 * @LastEditTime: 2019-08-29 13:16:30
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Detail extends Component {
    render() {
        console.log(this.props.match.params)
        return (
            <div>
                详情
            </div>
        );
    }
}

export default Detail;