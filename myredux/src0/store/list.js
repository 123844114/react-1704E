/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 15:09:32
 * @LastEditTime: 2019-08-16 16:32:57
 * @LastEditors: Please set LastEditors
 * 
 * 配reducer
 */
let barList=[
    {name:'螺旋焊钢',flag:false},
    {name:'热镀锌',flag:false},
    {name:'角钢',flag:false},
    {name:'直槽钢',flag:false},
    {name:'工业线材',flag:false}
]
let listreducer=(state={list:barList,searchList:[],value:'single'},action)=>{
    switch(action.type){
        case 'MULTI_ADD' :{ //实现多选
            if(!state.list[action.index].flag){ //去重
                state.searchList.push(state.list[action.index])
                state.list[action.index].flag=true
            }
            return {...state}
        }
        case 'CHANGE_OPTION':{
            state.value=action.val
            return {...state}
        }
        case 'SINGLE_ADD':{ //单选 index
            state.searchList[0]=state.list[action.index]
            return {...state}
        }
        
        default: return {...state}
    }
}
export default listreducer
