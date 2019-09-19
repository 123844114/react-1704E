/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 16:10:21
 * @LastEditTime: 2019-08-14 11:55:39
 * @LastEditors: Please set LastEditors
 *高阶组件 :是一个函数，参数是个组件，返回值 新组件
 */
import React, { Component } from 'react'
const wrapWithLogin = (Comp) => {
    class NewComp extends Component {
        componentDidMount(){
            // 判卷是否登陆
            if(!localStorage.user){
                this.props.history.push('/login')
            }
        }
        render(){
            return <Comp {...this.props}/>
        }

    }
    return NewComp

}
export default wrapWithLogin
