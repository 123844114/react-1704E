/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 20:35:55
 * @LastEditTime: 2019-08-21 15:21:40
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import data from '../../data/index.json'
import Item from '../../component/Item'
class Buy extends Component {
    state = { list: data.products0 }
    render() {
        let { list } = this.state
        return (
            <div>
                {
                    list.map((item, index) => <Item key={index} {...item} type='products0' getFn={this.getFn} useFn={this.useFn} />)
                }
            </div>
        );
    }
    // 领取
    getFn = (id, e) => {
        e.stopPropagation();
        let { list } = this.state
        list.find(item => item.productId === id).isRecommend = true
        this.setState({ list }) //更新数据，影响视图
    }
    // 去使用 跳到详情页
    useFn = (id,e) => {
        e.stopPropagation();
        this.props.history.push({
            pathname:'/detail/'+id,
            state:{type:'products0'}
        })
    }
}

export default Buy;
