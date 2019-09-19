/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 15:57:53
 * @LastEditTime: 2019-08-20 16:52:50
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import { connect } from 'react-redux'
import axios from 'axios'
class Tabs extends Component {
    render() {
        let { tabs } = this.props
        return <div>
            <h2>电子书榜单</h2>
            {
                tabs?tabs.map((item, index) => <span key={index}>{item.title}</span>):<span>无数据</span>
            }
        </div>
    }

}

class RightMenu extends Component {
    // state = { tabs: [] }
    render() {
        let { isloading, tabs } = this.props
        // console.log(this.props)
        return (
            <div>
                {isloading ? <Tabs tabs={tabs } /> : <h1>正在加载中</h1>}
            </div>
        );
    }
    componentDidMount() {
        axios.get('/righttab?id=1').then(({ data }) => {
            // this.setState({ tabs: data })
           
               setTimeout(()=>{
                this.props.getRight(data)
               },2000)
            
        })
    }
}

export default connect((state) => {
    console.log(state)
    return {
        isloading: state.list.isloading,
        tabs: state.list.rightTab
    }
}, (dispatch) => {
    return {
        getRight(data) {
            dispatch({
                type: 'SET_RIGHT',
                data
            })
        },
        setLoading(){
            dispatch({
                type:'SET_ISLOADING'
            })
        }
    }
})(RightMenu);