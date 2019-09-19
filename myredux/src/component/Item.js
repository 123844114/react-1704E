/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 14:43:39
 * @LastEditTime: 2019-08-29 13:14:36
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class Item extends Component {
    render() {
        let {img,title,price,flag,id,changeFlag}=this.props
        return (
            <div className='item' onClick={()=>{
                this.props.history.push('/detail/'+id)
            }}>
                <img src={require(`../images/${img}`)}/>
                <div className='img'>
                    <p>{title}</p>
                    <p>￥{price}/人</p>
                </div>
                {/* {flag?<button>+</button>:<button>-</button>} */}
                <button onClick={changeFlag.bind(this,id)}>{flag?'-':'+'}</button>
            </div>
        );
    }
}

export default connect((state)=>{
    return {}
},(dispatch)=>{
    return {
      changeFlag(id){
        dispatch({
           type:'CHANGE_FLAG' ,
           id
        })
      }  
    }
})(withRouter(Item));