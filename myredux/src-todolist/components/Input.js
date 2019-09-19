/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 13:49:20
 * @LastEditTime: 2019-08-15 16:27:01
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import store from '../store'

class Input extends Component {
    state = { val: ""}
    setVal = (e) =>{
        this.setState({val: e.target.value})
    }
    addList = (e) =>{
        if(e.keyCode === 13){
            store.dispatch({
                type: "ADD",
                txt: this.state.val,
            })
            this.setState({val:""})
        }
    }
    
    render() {
        let {val} = this.state
        return (
            <div>
                <input value={val} onChange={this.setVal} onKeyDown={this.addList} />
            </div>
        );
    }
}

export default Input;