/*
 * @Description: In User Settings Edits
 * @Author: your name
 * @Date: 2019-08-16 15:06:04
 * @LastEditTime: 2019-08-16 16:10:56
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Btn from './Btn'
import {connect} from 'react-redux'
import store from '../store';
class SearchList extends Component {
    constructor(props){
        super(props)
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        let {searchList} = this.props
        console.log(this.props)
        return (
            <div className='box'>
                筛选条件：{searchList.map((item,index)=> <Btn key={index} item={item} close={true}/>)}
            </div>
        );
    }
}
let mapStateToProps=(state)=>{
    console.log(state)
    return{
        searchList:state.list.searchList
    }
}
let mapDispatchToProps=()=>{
    return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchList);