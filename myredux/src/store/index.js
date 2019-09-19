/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 10:58:20
 * @LastEditTime: 2019-08-26 11:02:56
 * @LastEditors: Please set LastEditors
 */
import {createStore,combineReducers} from 'redux'
import list from './list'
let reducer=combineReducers({
    list
})
let store=createStore(reducer)
window.store=store
export default store