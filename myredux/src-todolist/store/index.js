/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-14 20:27:05
 * @LastEditTime: 2019-08-16 11:19:55
 * @LastEditors: Please set LastEditors
 */
import { createStore, combineReducers } from 'redux'
import list from './reducers/list'
import count from './reducers/count'

// let reducer = (state = { list: [{ text: "延时", flag: true }], count: 0 }, action) => {
//     let newState = { ...state, list: [...state.list] }
//     // switch(action.type){
//     //     case 'ADD': newState.list.push({text:action.txt,flag:true})
//     //     return newState;
//     //     case "ABC":newState.list[action.idx].flag=false
//     //     return newState;
//     //     case "AET":newState.list[action.idxs].flag=true;
//     //     newState.list[action.idxs].text=action.text
//     //     return newState;
//     //     case "del":newState.list.splice(action.index,1)
//     //     return newState;
//     //     case 'addCount':newState.count++
//     //     return newState
//     //     default :return newState;
//     // }
//     return {
//         list: list(state.list,action),
//         count: count(state.count,action)
//     }
// }

// 使用combineReducers
console.log(combineReducers)
let reducer = combineReducers({
    list, count
})

let store = createStore(reducer)
window.store = store
export default store