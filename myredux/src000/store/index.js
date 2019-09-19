/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 13:24:40
 * @LastEditTime: 2019-08-20 15:31:05
 * @LastEditors: Please set LastEditors
 */
import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import list from './list'
let reducer = combineReducers({
    list
})
let store = createStore(reducer,applyMiddleware(thunk))
window.store=store
console.log(store.dispatch)
// 开始改造dispatch,先将原有的保存，写个新的
// let next=store.dispatch  //真正dispatch

// store.dispatch=(arg)=>{  //假的
//     if(typeof arg ==='function'){
//          arg(next)
//     }else{
//        next(arg) 
//     } 
// }
export default store