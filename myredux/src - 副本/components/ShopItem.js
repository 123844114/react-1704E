/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 10:41:36
 * @LastEditTime: 2019-08-19 15:27:52
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {connect} from 'react-redux'
import store from '../store';
class ShopItem extends Component {
    render() {
        let {addFn,flag,title,price,count,id,singleCheck}=this.props
        console.log('render',this.props);
        return (
            <div className='shopitem'>
                <input type='checkbox' checked={flag} onChange={singleCheck.bind(this,id)}/>
                <p>{title}</p>
                <p>{price}</p>
                <p>
                    <button>-</button>
                    {count}
                    <button onClick={addFn.bind(this,id)}>+</button>
                </p>
                
            </div>
        );
    }
}

export default connect(()=>{
    return{}
},(dispatch)=>{
    return{
        addFn(id){
            dispatch({
                type:'ADD_COUNT',
                id:id
            }) 
        },
        singleCheck(id,e){
            dispatch({
                type:'SINGLE_CHECK',
                id:id,
                checked:e.target.checked
            })
        }
        
    }
})(ShopItem);