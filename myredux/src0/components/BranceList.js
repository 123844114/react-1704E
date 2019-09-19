/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 15:06:14
 * @LastEditTime: 2019-08-16 16:16:42
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Btn from './Btn'
import SelectCom from './SelectCom'
import store from '../store'
class BranceList extends Component {
    constructor(props){
        super(props)
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        let {list}=this.props.list
        console.log(this.props)
        return (
            <div className='box'>
                品种： 
                {
                    list.map((item,index)=><Btn key={index} index={index} item={item} close={false}/>)
                }
                <SelectCom/>
            </div>
        );
    }
}
let mapStateToProps=(state)=>{
    return{
        list:state.list
    }
}
let mapDispatchToProps=()=>{
    return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(BranceList);