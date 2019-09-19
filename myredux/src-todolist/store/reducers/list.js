/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 10:40:46
 * @LastEditTime: 2019-08-16 11:00:08
 * @LastEditors: Please set LastEditors
 */
let list = (state=[{ text: "延时", flag: true }],action) => {
    switch (action.type) {
        case 'ADD': state.push({ text: action.txt, flag: true })
            return [...state];
        case "ABC": state[action.idx].flag = false
            return [...state];
        case "AET": state[action.idxs].flag = true;
            state[action.idxs].text = action.text
            return [...state];
        case "del": state.splice(action.index, 1)
            return [...state];
        default: return [...state]
    }
}
export default list