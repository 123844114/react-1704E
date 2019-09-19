/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 15:54:43
 * @LastEditTime: 2019-08-19 17:20:48
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from 'react'
// 高阶组件即函数,参数是一个组件，返回值新的组件, 功能：路由守卫 , 调用：
const wrapWithLogin=(Comp)=>{
    class NewComp extends Component{
        componentDidMount(){
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