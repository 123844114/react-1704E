/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 10:41:32
 * @LastEditTime: 2019-08-16 11:06:01
 * @LastEditors: Please set LastEditors
 */
let count=(state=0,action)=>{
    switch(action.type){
        case 'addCount':state++
        return state
        default:return state;
    }
}
export default count