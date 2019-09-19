/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 16:25:39
 * @LastEditTime: 2019-08-24 10:57:56
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {Button,Icon,Modal} from 'antd'
import StateItem from './main/StateItem'
import store from '../store'
class Main extends Component {
    constructor(){
        super()
        store.subscribe(()=>{
            this.setState({})
        })
    }
    state = { visible: false,title:'' ,status:'',code:'',type:''}
    render() {
        let {stateList,list}=store.getState()
        let {title,type,status}=this.state
        console.log(stateList)
        return (
            <div className='main'>
                {
                   stateList.length&&stateList.map((item,index)=><StateItem key={index} {...item} show={this.show}/>)
                }
                <Modal
                    title="创建任务"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="完成"
                    cancelText="取消"
                >
                   任务标题： <input type='text' value={title} onChange={(e)=>{
                        this.setState({title:e.target.value})
                    }} />
                   任务紧急状态： <input type='text' value={status} onChange={(e)=>{
                        this.setState({status:e.target.value})
                    }} />
                    任务类型： <input type='text' value={type} onChange={(e)=>{
                        this.setState({type:e.target.value})
                    }} />
                </Modal>
            </div>
        );
    }
    handleOk = e => {
        this.setState({
            visible: false,
        });
        store.dispatch({
            type:'ADD_LIST',
            data:{
                ...this.state
            }
        })
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    show=(code)=>{
        alert()
        this.setState({visible:true,code})
    }
}

export default Main;
