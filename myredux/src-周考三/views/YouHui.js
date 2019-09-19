/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-21 12:17:10
 * @LastEditTime: 2019-08-21 16:02:09
 * @LastEditors: Please set LastEditors
 * 
 * 从json文件，过滤所有isRecommend=true的组成一个数据
 */
import React, { Component } from 'react';
import context from '../utils/context'
import data from '../data/index.json'
import Item from '../component/Item'
class YouHui extends Component {
    state={data,list:[]}
    render() {
        let {list}=this.state
        return (
            <div className='youhui'>
                <header><button onClick={()=>{
                    this.props.history.goBack()
                }}>返回 </button></header>
                {list.map((item,index)=>{
                    return <p key={index}>{item.title}</p>
                })}
            </div>
        );
    }
    componentDidMount(){
        let {data,list}=this.state
    //   let arr0=  data.products0.filter(item=>item.isRecommend)
    //   let arr1=  data.products1.filter(item=>item.isRecommend)
    //   this.setState({list:[...arr0,...arr1]})
      let arr=  Object.values(data).map(arr=>{
            return arr.filter(item=>item.isRecommend)
        })
    this.setState({list:arr.flat()})
    }
}

export default YouHui;