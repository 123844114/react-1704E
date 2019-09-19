/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 08:59:16
 * @LastEditTime: 2019-08-15 09:24:34
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Bar extends Component {
    render() {
        let {list,selectBar}=this.props
        console.log(this.props)
        return (
            <div className='bar'>
                {
                    list.map((item,index)=>{
                        return <button onClick={()=>{
                            selectBar(index)
                        }} key={index} className={item.flag?'active':null}>{item.name}</button>
                    })
                }
            </div>
        );
    }
}

export default Bar;