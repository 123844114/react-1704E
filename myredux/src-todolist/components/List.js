/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 13:50:20
 * @LastEditTime: 2019-08-16 12:01:04
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import Show from './list/Show'
import Edit from './list/Edit'
import store from "../store/index"
console.log(connect)
class List extends Component {
    constructor(){
        super()
        store.subscribe(()=>{
            this.setState({})
        })
    }
    state={isOk:false}
    render() {
        // let {list} =store.getState()
        let {list,adps}=this.props
        console.log(this.props)
        return (
            <div>
                {/* {this.state.flag?<p onClick={this.changeFn}> 
                {this.state.value}<span>X</span></p>:<input value={this.state.value}
                
                onChange={this.add.bind(this)} 
                onKeyDown={this.adps.bind(this)}/> } */}
                {
                    list.map((item,index)=>{
                    return (
                        item.flag?<p key={index} onClick={this.changeFn.bind(this,index)}> 
                        {item.text}<span onClick={this.clicks.bind(this,index)}>X</span></p>:
                        <p key={index}><input  defaultValue={item.text}
                       
                         onKeyDown={adps.bind(this,index)}/> </p>
                    )
                })
                }
                {
                    // list.map((item,index)=>item.flag?<Show />:<Edit/>)
                }

            </div>
        );
    }
    clicks=(index,e)=>{
        e.stopPropagation();
        store.dispatch({
            index:index,
            type:"del"
        })
    }
    changeFn=(idx)=>{
        let {isOk}=this.state
        if(!isOk){
            store.dispatch({
                type: "ABC",
                idx:idx
            })
            this.setState({isOk:true})  //有在编辑的
        }
        
    }
    add(e){
        this.setState({value:e.target.value})
    }
    // adps(idx,e){
    //     if(e.keyCode==13){
    //         store.dispatch({
    //             type: "AET",
    //             idxs:idx,
    //             text:e.target.value
    //         })
    //         this.setState({isOk:false})
    //     }
    // }
}
let mapStateToProps=(state)=>{
    return {
        list:state.list
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        adps(idx,e){
            if(e.keyCode==13){
                dispatch({
                    type: "AET",
                    idxs:idx,
                    text:e.target.value
                })
                this.setState({isOk:false})
            }
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);