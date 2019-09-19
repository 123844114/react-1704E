/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 09:06:23
 * @LastEditTime: 2019-08-15 18:47:55
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import store from '../store'
class Btn extends Component {
    state={ischeck:false}
    render() {
        let {item,index,close,fn}=this.props
        let {ischeck}=this.state
        console.log(fn)
        return (
            <span className={item.flag||ischeck?'btn active':'btn'} onClick={
                fn&&fn.bind(null,index)
            }>
            {item.name} 
            {close&&<i >&times;</i>}
            </span>
        );
    }
    
}

export default Btn;