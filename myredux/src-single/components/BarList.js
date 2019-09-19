/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 17:08:37
 * @LastEditTime: 2019-08-15 18:41:34
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import store from '../store'
import Btn from './Btn'
class SelectBtn extends Component{
    // state={val:'a'}
    render(){
        let {val}=store.getState()
        return(
            <select defaultValue={val} onChange={(e)=>{
                // console.log(e.target.value)
                store.dispatch({
                    type:'SelectBtn',
                    val:e.target.value
                })
            }}>
                <option value='a'>单选</option>
                <option value='b'>多选</option>
            </select>
        )
    }
}

class BarList extends Component{
    constructor(){
        super()
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render(){
        let {barList,val}= store.getState()
        return <div className='box'>品种：
                {barList.map((item,index)=>{
                    const m = val=='a'?this.singleAddFn:this.multiAddFn;
                    return <Btn key={index} index={index} item={item} fn={m} />
                }
                )}
            <SelectBtn/>
        </div>
    }
    multiAddFn=(index)=>{
        store.dispatch({
            type:'MultiAdd',
            index:index
        })
    }
    singleAddFn=(index)=>{
        store.dispatch({
            type:'SingleAdd',
            index:index
        })
        console.log('single')
    }
}
export default BarList