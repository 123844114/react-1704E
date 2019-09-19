/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-10 10:49:28
 * @LastEditTime: 2019-08-13 14:38:24
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import axios from 'axios'
class Detail extends Component {
    state={detailData:{}}
    render() {
        console.log(this.props)
        let {detailData}=this.state
        return (
            <div>
                <h3>{detailData.title}</h3>
                <p>{detailData.desciption}</p>
            </div>
        );
    }
    componentDidMount(){
        //调接口获取对应id的详情
        let {match:{params:{id}}}=this.props
        // let {location:{state:{id}}} = this.props
        // console.log(this.props)
        axios.get('/detail?id='+id).then(({data})=>{
            // console.log(data)
            this.setState({detailData:data})
        })
    }
}

export default withRouter(Detail);