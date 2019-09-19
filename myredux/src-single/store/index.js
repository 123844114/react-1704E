/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 13:44:21
 * @LastEditTime: 2019-08-15 18:43:23
 * @LastEditors: Please set LastEditors
 */
import { createStore } from 'redux'
let barList=[
    {name:'螺旋焊钢',flag:false},
    {name:'热镀锌',flag:false},
    {name:'角钢',flag:false},
    {name:'直槽钢',flag:false},
    {name:'工业线材',flag:false}
]
let selectList=[]
let reducer = (state={barList,selectList,val:'a'}, action) => {
    let newState = { ...state,barList:[...state.barList],selectList:[...state.selectList] }
    switch (action.type) {
        case 'MultiAdd':{
            newState.barList[action.index].flag=true
            newState.selectList=newState.barList.filter(item=>item.flag)
            return newState
        }
        case 'SingleAdd':{
            newState.selectList[0]=newState.barList[action.index]
            return newState
        }
        case 'SelectBtn':{
            newState.val=action.val
            return newState
        }
        default: return newState
    }
}
let store = createStore(reducer)
window.store=store
export default store