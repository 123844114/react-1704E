/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 10:46:23
 * @LastEditTime: 2019-08-29 13:11:40
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import store from '../store'
import { connect } from 'react-redux'
import Item from '../component/Item'
import LazyLoad from 'react-lazy-load'
class Footer extends Component {
    render() {
        let { num, changeShow } = this.props
        return (
            <div className='footer'>
                <span className='total' onClick={changeShow}>{num}</span>

            </div>
        )
    }
}
const MyFooter = connect((state) => {
    return {
        num: state.list.num
    }
})(Footer);
//遮罩层
class Cover extends Component {
    render() {
        let { list } = this.props
        return (
            <div className='cover'>
                <div className='body'>
                    {
                        list.map((item, index) => <Item key={index} {...item} />)
                    }
                </div>
            </div>
        )
    }
}
class List extends Component {
    state = { show: false }
    render() {
        let { list } = this.props
        let { show } = this.state
        return (
            <div className='list'>
                {
                    list.map((item, index) => <Item key={index} {...item} />)
                }
                <MyFooter changeShow={this.changeShow} />
                {show && <Cover list={list.filter(item => item.flag)} />}
            </div>
        );
    }
    changeShow = () => {
        this.setState({ show: true })
    }
}

export default connect((state) => {
    return {
        list: state.list.list
    }
}, (dispatch) => {
    return {}
})(List);