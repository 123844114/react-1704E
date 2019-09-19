/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 15:06:35
 * @LastEditTime: 2019-08-16 16:33:32
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import store from '../store'
class Btn extends Component {
    constructor(){
        super()
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        let {item,close,multiAdd,index,value,singleAdd}=this.props
        return (
            <span className={item.flag?'btn active':'btn'} onClick={value==='single'? singleAdd.bind(this,index) :multiAdd.bind(this,index)}>
                {item.name} {close&&<span>&times;</span>}
            </span>
        );
    }
}
let mapStateToProps=(state)=>{
    return{
        value:state.list.value
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        multiAdd(index){
            dispatch({
                type:'MULTI_ADD',
                index:index
            })
        },
        singleAdd(index){
            dispatch({
                type:'SINGLE_ADD',
                index:index
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Btn);