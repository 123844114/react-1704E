/*
 * @Description: In User Settings Edi
 * @Author: your name
 * @Date: 2019-08-20 22:09:38
 * @LastEditTime: 2019-08-21 15:18:54
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { withRouter} from 'react-router-dom'
class Item extends Component {
    render() {
        let { smallImgUrl, isRecommend, title, peopleCount, productId,type,getFn,useFn} = this.props
        return (
            <div className='item' onClick={this.toDetail.bind(this, productId)}>
                <h4>{title}</h4>
                <img src={smallImgUrl} />
                <p>收藏人数{peopleCount}</p>
                {isRecommend ? <button onClick={useFn.bind(this,productId)}>去使用</button> : <button onClick={getFn.bind(null,productId)}>领取</button>}
            </div>
        );
    }
    // 跳详情
    toDetail = (id) => {
        this.props.history.push({
            pathname:'/detail/' + id,
            state:{type:this.props.type}
        })
    }
}

export default withRouter(Item);