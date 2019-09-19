/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 20:38:14
 * @LastEditTime: 2019-08-21 16:44:50
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import context from '../utils/context'
import data from '../data/index.json'
import { timingSafeEqual } from 'crypto';
console.log(React)
class Detail extends Component {
    state = { obj: {}, flag: false }
    render() {
        let { match: { params: { id } }, location: { state: { type } } } = this.props
        // let obj = data[type].find(item => item.productId === id)
        let { flag } = this.state
        return (
            <div className='detail'>
                <context.Consumer>
                    {
                        (v) => {
                            console.log(this.obj)
                            this.obj = v[type].find(item => item.productId === id)
                            // this.setState({obj})
                            return <>
                                <span>{this.obj.title}</span>
                                <button onClick={this.clickFn} className={this.obj.playDayDesc ? 'active' : null}>{this.obj.peopleCount}收藏</button>
                            </>
                        }
                    }
                </context.Consumer>
            </div>
        );
    }
    //收藏---存本地
    clickFn = () => {
        // debugger
        let storeList = localStorage.storeList ? JSON.parse(localStorage.storeList) : []
        if (this.obj.playDayDesc) { //已经被点击
            this.obj.peopleCount--
        } else {
            this.obj.peopleCount++
            storeList.push(this.obj)
            localStorage.storeList = JSON.stringify(storeList)
        }
        this.obj.playDayDesc = !this.obj.playDayDesc
        this.setState({})
        // this.setState({flag:!this.state.flag})
    }
    componentDidMount() {

    }
}

export default Detail;
