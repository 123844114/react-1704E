/*
 * @Description: In User Settings Edit
 
 * @Author: your name
 * @LastEditTime: 2019-08-23 11:54:15
 * @LastEditors: Please set LastEditors22 14:38:25
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
class Item extends Component {
    state={isshow:false,txt:''}
    render() {
        console.log(this)
        let {info,title,user,commonList} =this.props
        let {isshow,txt}=this.state
        return (
            <div className='item'>
                <p>
                    <img src={user.avator}/> <span>{user.name}</span><span>{user.time}</span> <button>关注</button>
                </p>
                <h5>{title}</h5>
                <p>{info}</p>
                {/* 跟帖信息 */}
                {
                    commonList.map((item,index)=>{
                        return <div key={index} style={{border:'1px solid red'}}>
                            <p><span>{item.user.name}</span><span>{item.user.time}</span></p>
                            <p>{item.txt}</p>
                        </div>
                    })
                }
                    
               {isshow?<input type='text' value={txt} onChange={(e)=>{
                   this.setState({txt:e.target.value})
               }} onBlur={this.add_com}/>:null}
                <p>
                    <button onClick={this.comFn}>评论</button>
                    <button>点赞</button>
                    <button>收藏</button>
                </p>
            </div>
        );
    }
    /*点击评论按钮
    * 1、显示input
    */
    comFn=()=>{
        this.setState({isshow:true})
    }
    //添加评论
    add_com=()=>{
        if(this.state.txt){
            axios.post('/add_com',{
                id:this.props.id,
                txt:this.state.txt,
                currentIndex:localStorage.currentIndex
            }).then(({data})=>{
                // alert(data.message)
                this.setState({isshow:false})
                // this.props.history.go(0)
            })
        }
    }
    
}

export default withRouter(Item);