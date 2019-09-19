/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-17 10:09:18
 * @LastEditTime: 2019-08-19 23:16:26
 * @LastEditors: Please set LastEditors
 */
// 计算方法  数组的reduce
// let computeFn=(list)=>{
//     let sum=0
//     list.forEach(item=>{
//         if(item.flag){
//             sum+= item.count*item.price
//         }
//     })
//     return sum
// }
let computeFn = (list) => {
    return list.reduce((total, current) => {
        if (current.flag) {
            return total += current.count * current.price
        }
        // return total
    }, 0)
}
// 从本地取数据
let shop = localStorage.shop ? JSON.parse(localStorage.shop) : []
let shopReducer = (state = { list: [], shop, isCheckAll: false, totalPrice: 0 }, action) => {
    let newState = { ...state,list:[...state.list], shop: [...state.shop] }
    switch (action.type) {
        case 'GET_LIST':{
            newState.list=action.data
            return newState
        }
        case 'ADD': {
            //去重
            let index = -1
            index = newState.shop.findIndex(item => item.id === action.data.id)
            if (index === -1) {
                newState.shop.push(action.data)
                //存本地 问题 重复
                //   let shop=  localStorage.shop?JSON.parse(localStorage.shop):[]
                //   shop.push(data)
                localStorage.shop = JSON.stringify(newState.shop)
            }
        }
            return { ...newState };
        case 'ADD_COUNT':  //加法
            {
                newState.shop.find(item => item.id === action.id).count++
                newState.totalPrice = computeFn(newState.shop)
                return newState
            }
        case 'CHECK_ALL': { //全选
            newState.isCheckAll = action.checked
            newState.shop.forEach(item => item.flag = action.checked)
            localStorage.shop = JSON.stringify(newState.shop)
            newState.totalPrice = computeFn(newState.shop)
            return { ...newState }
        }
        case 'SINGLE_CHECK': { //单独点某一个的时候
            // 1、修改当前checkbox的flag值
            newState.shop.find(item => item.id === action.id).flag = action.checked
            // 2、联动全选
            let flag = newState.shop.every(item => item.flag)
            newState.isCheckAll = flag
            newState.totalPrice = computeFn(newState.shop)
            return newState
        }
        default: return newState
    }
}
export default shopReducer 