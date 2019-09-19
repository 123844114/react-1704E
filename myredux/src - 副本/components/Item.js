/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 09:45:20
 * @LastEditTime: 2019-08-17 09:58:26
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Item extends Component {
    render() {
        let {item}=this.props
        return (
            <div className='item' onClick={this.toDetail.bind(null,item.id)}>
                <img src={item.img}/>
                <p>{item.title}</p>
                <p>￥{item.price}</p>
            </div>
        );
    }
    toDetail=(id)=>{
       this.props.history.push('/detail/'+id) 
    }
}

export default withRouter(Item);