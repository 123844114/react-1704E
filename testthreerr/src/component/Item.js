/*
 * @Description: In User Settings Edi
 * @Author: your name
 * @Date: 2019-08-20 22:09:38
 * @LastEditTime: 2019-08-21 10:16:56
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Item extends Component {
    render() {
        let {smallImgUrl,isRecommend,title,peopleCount}=this.props
        return (
            <div className='item'>
                <h4>{title}</h4>
                <img src={smallImgUrl}/>
                <p>收藏人数{peopleCount}</p>
                {isRecommend?<button>去使用</button>:<button>领取</button>}
            </div>
        );
    }
}

export default Item;