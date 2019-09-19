/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 08:54:20
 * @LastEditTime: 2019-08-19 23:27:55
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Item from '../components/Item'
import {connect} from 'react-redux'
// import listData from '../data/list.json'
import axios from 'axios'
class Home extends Component {
    state={listData:[{name:'jim'}]}
    render() {
        console.log(this.props)
        let {listData}=this.props
        return (
            <div className='list'>
                {
                    listData.map((item,index)=>{
                        return <Item key={index} item={item} />
                    })
                }
            </div>
        );
    }
    componentDidMount(){ 
        // axios.get('/list').then(({data})=>{
        //     // this.setState({
        //     //     listData:data
        //     // })
        // })
       this.props.getList()
    }
}
let fn=(next)=>{
    axios.get('/list').then(({data})=>{
        // this.setState({
        //     listData:data
        // })
        next({
            type:'GET_LIST',
            data:data
        })
    })
}

export default connect((state)=>{
    console.log(state.shop.list)
    return {
    listData:state.shop.list
}
},(dispatch)=>{
    return {
        getList(){
            dispatch(fn)
        }
    }
})(Home);