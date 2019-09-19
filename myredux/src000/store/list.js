/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 13:26:01
 * @LastEditTime: 2019-08-20 16:44:01
 * @LastEditors: Please set LastEditors
 */
const listReducer = (state = { list: [], isloading: false, rightTab: [] }, action) => {
    let newState = { ...state, list: [...state.list], rightTab: [...state.rightTab] }
    switch (action.type) {
        case 'GET_LIST': newState.list = action.data
            return newState
        case 'SET_RIGHT': {
            newState.rightTab = action.data
            newState.isloading = true
            return newState
        }
        case 'SET_ISLOADING':
            {
                newState.isloading = false
                return newState
            }
        default: return newState
    }
}
export default listReducer