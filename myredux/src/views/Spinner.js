/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-29 13:35:48
 * @LastEditTime: 2019-08-29 13:47:20
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Spinner extends Component {
    render() {
        return (
            <div>
                hello
            </div>
        );
    }
    componentDidMount(){
        setTimeout(()=>{
            console.log(111)
        },1000)
    }
}

export default Spinner;