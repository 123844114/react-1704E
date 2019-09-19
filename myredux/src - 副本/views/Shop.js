/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 08:54:34
 * @LastEditTime: 2019-08-19 16:26:05
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import store from '../store'
import {connect} from 'react-redux'
import ShopItem from '../components/ShopItem'
import wrapWithLogin from '../utils/wrapWithLogin'
class Shop extends Component {
    render() {
        console.log(this.props)
        // let shop=store.getState().shop
        let {shop,isCheckAll,totalPrice,checkAllFn}=this.props
        return (
            <div>
                {
                    shop.map((item,index)=>{
                        console.log(item);
                        return <ShopItem key={index} {...item}/>;
                    })
                }
                <label><input  type="checkbox" checked={isCheckAll} onChange={checkAllFn}/> 全选</label> 总价:{totalPrice}
            </div>
        );
    }
}

export default connect((state)=>{
    return{
        shop:state.shop.shop,
        isCheckAll:state.shop.isCheckAll,
        totalPrice:state.shop.totalPrice
    }
},(dispatch)=>{
    return {
        checkAllFn(e){
            dispatch({
                type:'CHECK_ALL',
                checked:e.target.checked
            })
        }
    }
})(wrapWithLogin(Shop));