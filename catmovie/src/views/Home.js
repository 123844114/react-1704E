/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-13 15:34:06
 * @LastEditTime: 2019-08-14 15:19:16
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Footer from '../components/Footer'
// import { BrowserRouter, Route, Redirect, NavLink, Switch } from 'react-router-dom'

// import Hot from './movie/hot'
// import Ing from './movie/ing'
import RouterView from '../router/routerView'
class Home extends Component {
    render() {
        console.log(this.props)
        let {route}=this.props   //路由表数组
        return (
            <div className='home'>
                <div className='home-main'>
                    {/* <Switch>
                        <Route path='/home/movie' component={Movie}></Route>
                        <Route path='/home/cinema' component={Cinema}></Route>
                        <Route path='/home/my' component={My}></Route>
                    </Switch> */}
                    {/* <Switch>
                    {route.map((item,index)=>{
                        return <Route key={index} path={item.path} component={item.component}></Route>
                    })}
                    </Switch> */}
                    <RouterView route={route}/>
                    
                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;