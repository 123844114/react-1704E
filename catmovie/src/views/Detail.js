/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 15:42:47
 * @LastEditTime: 2019-08-14 17:11:31
 * @LastEditors: Please set LastEditors
 * 获取动态路由  match  params
 */
import React, { Component } from 'react';
import axios from 'axios'
class Detail extends Component {
    state={data:{}}
    render() {
        console.log(this.props)
        let {data} =this.state;
        return (
            <div>
              {data.img&&<img src={data.img.replace('w.h','128.180')}/>}  
            </div>
        );
    }
    componentDidMount(){
        //获取详情数据
        let {match:{params:{id}}}=this.props
        axios.get('/hots?id='+id).then(({data})=>{
             this.setState({data:data})
        })
    }
}

export default Detail;