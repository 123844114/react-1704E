/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 15:27:43
 * @LastEditTime: 2019-08-16 16:27:56
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
class SelectCom extends Component {

    render() {
        let {value,changeOption}=this.props
        return (
            <select value={value} onChange={changeOption}>
                <option value='single'>单选</option>
                <option value='multi'>多选</option>
            </select>
        );
    }
}

export default connect((state)=>{
    // console.log(state)
return {
    value:state.list.value
}
},(dispatch)=>{
    return {
        changeOption(e){
            dispatch({
                type:'CHANGE_OPTION',
                val:e.target.value
            }) 
        }
    }
})(SelectCom);