/*
 * @Description: In User Settings Edit{}
 * @Author: your name
 * @Date: 2019-08-17 09:53:09
 * @LastEditTime: 2019-08-19 23:19:42
 * @LastEditors: Please set LastEditors
 */
import { createStore, combineReducers } from 'redux'
import shop from './shop'
let reducer = combineReducers({
    shop
})

let store = createStore(reducer)
window.store = store
let next = store.dispatch //真
store.dispatch = (arg) => {
    console.log('0', store.getState())
    if (typeof arg == 'function') {
        arg && arg(next)
    } else {
        next(arg)
    }
    console.log('1', store.getState())
}//假
export default store