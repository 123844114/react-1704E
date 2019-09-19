/*
 * @Description: In User Settings Editer
 * @Author: your name
 * @Date: 2019-08-26 11:00:26
 * @LastEditTime: 2019-08-26 15:27:00
 * @LastEditors: Please set LastEditors
 */
import listJson from '../data/list.json'
const computeFn = (list) => {
    return list.filter(item => item.flag).length
}
let listReducer = (state = { list: listJson, num: 0 }, action) => {
    let newState = { ...state, list: [...state.list] }
    switch (action.type) {
        case 'CHANGE_FLAG':
            newState.list.find((item) => item.id === action.id).flag = !newState.list.find((item) => item.id === action.id).flag
            newState.num = computeFn(newState.list)
            return newState
        default: return newState
    }
}
export default listReducer