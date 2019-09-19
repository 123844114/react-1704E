/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 13:44:21
 * @LastEditTime: 2019-08-16 16:29:05
 * @LastEditors: Please set LastEditors
 * redux
 * 创建仓库
 * 合并reducer:combineReducers函数({})
 */
import { createStore,combineReducers } from 'redux'
import list from './list'
let reducer=combineReducers({
    list
})
let store = createStore(reducer)
window.store=store
export default store

