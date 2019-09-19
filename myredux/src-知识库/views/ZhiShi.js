/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-22 11:20:24
 * @LastEditTime: 2019-08-22 14:20:20
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import axios from 'axios'
class LeftCom extends Component{
    render(){
        let {list,currentIndex,tabFn}=this.props
        return (
            <ul className='zhishi-r'>
                {
                    list.map((item,index)=>{
                        return <li key={index} className={currentIndex==index?'active':null} onClick={tabFn.bind(null,index)}>{item.type}</li>
                    })
                }
            </ul>
        )
    }
    
}
class RightCom extends Component{
    render(){
        let {data}=this.props
        return (
            <>
            {
               data&&data.map((item,index)=><span key={index}>{item}</span>)
            }
            </>
        )
    }
}
class ZhiShi extends Component {
    state={list:[],currentIndex:0}
    render() {
        let {list,currentIndex}=this.state
        return (
            <div className='zhishi'>
                <LeftCom list={list} currentIndex={currentIndex} tabFn={this.tabFn}/>
                <RightCom data={list.length&&list[currentIndex].list}/>
            </div>
        );
    }
    // tab切换
    tabFn=(index)=>{
        this.setState({currentIndex:index})
    }
    componentDidMount(){
        axios.get('/zs').then(({data})=>{
            this.setState({list:data})
        })
    }
}

export default ZhiShi;