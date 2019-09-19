/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 08:55:30
 * @LastEditTime: 2019-08-14 09:38:38
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className='seach'>
                <input type='text' defaultValue='1'/>
                <button onClick={()=>{this.props.history.goBack()}}>取消</button>
            </div>
        );
    }
}

export default Search;