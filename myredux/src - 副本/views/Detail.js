/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 09:41:52
 * @LastEditTime: 2019-08-19 11:36:31
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import listData from '../data/list.json'
import {connect} from 'react-redux'
class Detail extends Component {
    state={data:{}}
    render() {
        let {match:{params:{id}},addShop}=this.props
        console.log(this.props)
        let {title,img,price,count}=this.state.data
        return (
            <div>
               <img src={img}/>  
               <p>{title}</p>
               <p>
                   <button>收藏</button>
                   <button onClick={addShop.bind(this,this.state.data)}>加入购物车</button>
               </p>
            </div>
        );
    }
    componentDidMount(){
        let {match:{params:{id}}}=this.props
       let d= listData.find((item)=>item.id==id)
       this.setState({data:d})
    }
    
}
let mapStateToProps=(state)=>{
    return {}
}
let mapDispatchToProps=(dispatch)=>{
    return {
        addShop:(data)=>{ //加入购物车
            dispatch({
                type:'ADD',
                data:data
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Detail);