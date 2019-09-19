/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-12 12:15:58
 * @LastEditTime: 2019-08-12 13:44:26
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Zi1 extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        console.log('render')
        return (
            <div>
                Zi1
            </div>
        );
    }
    // componentDidMount(){
    //     console.log('componentDidMount')
    // }
    // static getDerivedStateFromProps(){
    //     console.log('getDerivedStateFromProps')
    //     return {}
    // }
    // getSnapshotBeforeUpdate(){
    //     console.log('getSnapshotBeforeUpdate')
    // }
    // componentWillUnmount(){
    //     console.log('componentWillUnmount')
    // }
    // componentWillUpdate(){
    //     console.log('componentWillUpdate')
    // }
}

export default Zi1;