/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-24 09:30:32
 * @LastEditTime: 2019-08-24 10:56:13
 * @LastEditors: Please set LastEditors
 */
import stateJson from '../data/state.json'
import list from '../data/list.json'
import { createStore, combineReducers } from 'redux'
let reducer = (state = { stateList: [], list: [] }, action) => {
    let newState = { ...state, stateList: [...state.stateList], list: [...state.list] }
    switch (action.type) {
        case 'SET_STATELIST':
            {
                newState.stateList = action.data
                return newState
            }
        case 'SET_LIST': {
            newState.list = action.data
            return newState;
        }
        case 'ADD_STATE': {
            let obj = {
                id: newState.stateList.length,
                code: newState.stateList.length,
                name: action.data
            }
            newState.stateList.push(obj)
            return newState
        }
        case 'ADD_LIST': {
            let obj = {
                "id": newState.list.length,
                "code": action.data.code,
                "title": action.data.title,
                "start_time": "2019-08-23",
                "end_time": "2019-08-25",
                "status": action.data.status,
                "type": action.data.type
            }
            newState.list.push(obj)
            return newState
        }
        default: return newState
    }
}
let store = createStore(reducer)
window.store = store

export default store