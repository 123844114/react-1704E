/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 10:58:11
 * @LastEditTime: 2019-08-13 11:00:36
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react'
const wrapWithLogin= (Comp)=>{
    class newComponent extends Component{ //新组件判断登陆与否
        render(){
            return <Comp/>
        }
        componentDidMount(){
           if(!localStorage.user) {
               this.props.history.push('/login')
           }
        }

    }
    return newComponent
}
export default wrapWithLogin