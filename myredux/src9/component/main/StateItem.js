/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 16:17:39
 * @LastEditTime: 2019-08-24 11:04:37
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { Button, Icon } from 'antd'
import Card from "./Card"
import store from "../../store/index"
class StateItem extends Component {
    constructor(){
        super()
        this.state={}
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        let {list}=store.getState()
        let { name,show ,code} = this.props
        return (
            <div className='state-item'>
                <h1>{name}</h1>
                {
                    list.filter((item)=>item.code===code).map((item,index)=><Card key={index} {...item}/>)
                }
                <Button type="ghost" size='large'  onClick={show.bind(this,code)}>
                    <Icon type="plus" />
                </Button>
            </div>
        );
    }   
}

export default StateItem;
