/*
 * @Description: In User Settings Edi
 * @Author: your name
 * @Date: 2019-08-17 08:50:06
 * @LastEditTime: 2019-08-17 09:41:39
 * @LastEditors: Please set LastEditors
 */
import Home from "../views/Home"
import Login from "../views/Login"
import My from "../views/My"
import Shop from "../views/Shop"
import Store from '../views/Store'
import Detail from '../views/Detail'
const routes=[
    {
        path:"/home",
        component:Home,
    },
    {
        path:"/shop",
        component:Shop,
    },
    {
        path:"/detail/:id",
        component:Detail,
    },
    {
        path:"/login",
        component:Login,
    },
    {
        path:"/store",
        component:Store,
    },
    {
        path:"/my",
        component:My,
    },{
        path:"/",
        redirect:"/home"
    }
]
export default routes