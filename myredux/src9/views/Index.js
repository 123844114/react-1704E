/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-23 16:05:06
 * @LastEditTime: 2019-08-24 09:48:08
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Top from '../component/Top'
import Main from '../component/Main'
import { Button, Icon, Modal } from 'antd'
import store from '../store'
import axios from 'axios'
class Index extends Component {
    state = {
        visible: false,
        value:''
    }
    render() {
        let {value}=this.state
        return (
            <>
                <Top />
                <button className='add_title' onClick={this.show.bind(this)}>+添加状态</button>
                <Modal
                    title="添加状态"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="确认"
                    cancelText="取消"
                >
                    <input type='text' value={value} onChange={(e)=>{
                        this.setState({value:e.target.value})
                    }}/>
                </Modal>
                <Main />
            </>
        );
    }
    componentDidMount(){
        axios.get('/state').then(({data})=>{
            store.dispatch({
                type:'SET_STATELIST',
                data:data
            })
        })
        axios.get('/list').then(({data})=>{
            store.dispatch({
                type:'SET_LIST',
                data:data
            })
        })
    }
    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
        store.dispatch({
            type:'ADD_STATE',
            data:this.state.value
        })
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    show() {
        this.setState({
            visible: true,
          });
    }
}

export default Index;