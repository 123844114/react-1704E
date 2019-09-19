/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:07:08
 * @LastEditTime: 2019-08-15 17:50:05
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import store from '../store'
import Btn from './Btn'
class SearchList extends Component {
    constructor() {
        super()
        store.subscribe(() => {
            this.setState({})
        })
    }
    render() {
        let {selectList}=store.getState()
        return <div className='box'>筛选条件：
        {
            selectList.map((item,index)=><Btn key={index} index={index} item={item} close={true}/>)
        }
        </div>
    }
}
export default SearchList