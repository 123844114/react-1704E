/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 16:02:08
 * @LastEditTime: 2019-08-14 11:55:42
 * @LastEditors: Please set LastEditors
 * hot 正在热映
 */
import React, { Component } from 'react';
import axios from 'axios'
import Item from '../../components/Item'
class hot extends Component {
    state={list:[]}
    render() {
        let {list}=this.state
        return (
            <div className='list'>
                {
                  list&&list.map((item,index)=><Item item={item} key={index}/>)  
                }
            </div>
        );
    }
    componentDidMount(){
        axios.get('/hot').then(({data})=>{
            this.setState({list:data})
        })
    }
}

export default hot;