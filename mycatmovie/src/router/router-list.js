/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 13:32:19
 * @LastEditTime: 2019-08-13 14:34:29
 * @LastEditors: Please set LastEditors
 */
import Home from '../views/Home'
import Zi1 from '../views/Zi1'
import Zi2 from '../views/Zi2'
import Descover from '../views/Descover'
import My from '../views/My'
import Login from '../views/Login'
import Detail from '../views/Detail'
const routerList = [
    {
        path: '/home',
        component: Home,
        children: [
            {
                path: '/home/zi1',
                component: Zi1
            },
            {
                path: '/home/zi2',
                component: Zi2
            }
        ]
    },
    {
        path: '/discovery',
        component: Descover
    },
    {
        path: '/my',
        component: My
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/detail/:id',
        component: Detail
    },
    {
        path:'/',
        redirect:'/home'
    }

]
export default routerList