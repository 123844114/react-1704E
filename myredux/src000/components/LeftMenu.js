/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:48:54
 * @LastEditTime: 2019-08-20 16:52:36
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
class LeftMenu extends Component {
    render() {
        let {list}=this.props
        return (
            <div>
                {
                    list.map((item,index)=><span key={index} onClick={this.clickFn.bind(this,item.id)}>{item.title}</span>)
                }
            </div>
        );
    }
    clickFn=(id)=>{
        axios.get('/righttab?id='+id).then(({data})=>{
          
                setTimeout(()=>{
                    this.props.setRightTab(data)
                },2000)
            
        })
    }
    componentDidMount(){
        this.props.setLoading()
        this.props.getList()
    }
}

let fn = (dispatch) => {
    dispatch({
        type:'SET_ISLOADING'
    })
    axios.get('/list').then(({ data }) => {
        dispatch({
            type: 'GET_LIST',
            data
        })
    })
}

export default connect((state) => {
    return {
        list: state.list.list
    }
}, (dispatch) => {
    return {
        getList(data) {
            dispatch(fn)
        },
        setRightTab(data){
            dispatch({
                type:'SET_RIGHT',
                data
            })
        },
        setLoading(){
            dispatch({
                type:'SET_ISLOADING'
            })
        }
    }
})(LeftMenu)