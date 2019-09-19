/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 08:41:26
 * @LastEditTime: 2019-08-14 17:11:11
 * @LastEditors: Please set LastEditors
 */

/*
 * 列表项
 */
import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
class Item extends Component {
    render() {
        let {item}=this.props
        return (
            <div className='item' onClick={this.toDetail.bind(this,item.id)}>
                <img src={item.img.replace('w.h','128.180')}/>
                <div>{item.nm}</div>
                {item.globalReleased?<button style={{background:'red'}}>购票</button>:<button style={{background:'green'}}>预售</button>}
            </div>
        );
    }
    toDetail=(id)=>{
        console.log(id)
        this.props.history.push('/detail/'+id,{a:1})
    }
}

export default withRouter(Item);