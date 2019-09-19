/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 21:08:58
 * @LastEditTime: 2019-08-16 11:38:38
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Input from "../components/Input"
import List from "../components/List"
import store from '../store'
import { Provider } from 'react-redux'
console.log(Provider)
class index extends Component {
    constructor(props) {
        super(props);
        store.subscribe(() => {
            this.setState({})
        })
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <Input />
                    <List />
                    <button onClick={this.addCount}>+</button>{store.getState().count}
                </Provider>
            </div>
        );
    }
    addCount = () => {
        store.dispatch({
            type: 'addCount'
        })
    }
}

export default index;